import platform
from typing import Optional, TypedDict

import requests

from MPCAutofill.settings import PATREON_ACCESS, PATREON_URL

# Header must be included to access Patreon info
patreon_header = {
    "Authorization": f"Bearer {PATREON_ACCESS}",
    "User-Agent": f"Patreon-Python, version 0.5.1, platform {platform.platform()}",
}


class Campaign(TypedDict):
    """Patreon 'Campaign' data schema."""

    id: str
    about: str


class Supporter(TypedDict):
    """Patron 'Supporter' data schema."""

    name: str
    tier: str
    date: str
    usd: int


class SupporterTier(TypedDict):
    """Patron 'Tier' data schema."""

    title: str
    description: str
    usd: int


def get_patreon_campaign_details() -> tuple[Optional[Campaign], Optional[dict[str, SupporterTier]]]:
    """
    Get needed patreon campaign details.
    :return: Campaign ID, list of dictionaries containing supporter tier info.
    """

    if not PATREON_URL:
        return None, None

    try:
        res = requests.get(
            # https://docs.patreon.com/#get-api-oauth2-v2-campaigns
            url="https://www.patreon.com/api/oauth2/v2/campaigns",
            params={
                "include": "tiers",
                "fields[campaign]": "summary",
                "fields[tier]": ",".join(["title", "description", "amount_cents"]),
            },
            headers=patreon_header,
        ).json()

        # Properly format campaign details
        campaign: Campaign = {"id": res["data"][0]["id"], "about": res["data"][0]["attributes"]["summary"]}

        # Properly format campaign tiers
        tiers: dict[str, SupporterTier] = {}
        for tier in res["included"]:
            # Ignore free tier
            if tier["attributes"]["amount_cents"] < 1:
                continue
            # Build dictionary of tiers to reference by ID
            tiers[tier["id"]] = {
                "title": tier["attributes"]["title"],
                "description": tier["attributes"]["description"],
                "usd": round(tier["attributes"]["amount_cents"] / 100),
            }
    except KeyError:
        print("Warning: Cannot locate Patreon campaign. Check Patreon access token!")
        return None, None
    return campaign, tiers


def get_patrons(
    campaign_id: str, campaign_tiers: dict[str, SupporterTier], page: Optional[str] = None
) -> Optional[list[Supporter]]:
    """
    Get our patreon contributors.
    :note: https://docs.patreon.com/#get-api-oauth2-v2-campaigns-campaign_id-members
    :return: List of dictionaries containing patreon contributor info.
    """

    if not PATREON_URL:
        return None

    try:
        # Use page if provided, otherwise build a complete query
        res = (
            requests.get(url=page, headers=patreon_header).json()
            if page
            else requests.get(
                url=f"https://www.patreon.com/api/oauth2/v2/campaigns/{campaign_id}/members",
                params={
                    "include": "currently_entitled_tiers",
                    "fields[member]": ",".join(
                        ["full_name", "campaign_lifetime_support_cents", "pledge_relationship_start", "patron_status"]
                    ),
                },
                headers=patreon_header,
            ).json()
        )

        # Ready the next page if provided
        next_page = res.get("links", {}).get("next")

        # Return formatted list of patrons
        results: list[Supporter] = []
        for mem in res["data"]:

            # Skip non-active members
            mem_details = mem["attributes"]
            if mem_details.get("patron_status") != "active_patron":
                continue

            # Pull subscribed tiers for this member
            mem_tiers = [
                campaign_tiers[t["id"]]
                for t in mem.get("relationships", {}).get("currently_entitled_tiers", {}).get("data", [])
                if t.get("id") in campaign_tiers
            ]

            # Skip members with no subscribed tiers
            if not mem_tiers:
                continue

            # Use member's highest subscribed tier
            current_tier = sorted(mem_tiers, key=lambda item: item["usd"])[0]

            # Add member to results
            results.append(
                Supporter(
                    name=mem["attributes"]["full_name"],
                    tier=current_tier["title"],
                    date=mem["attributes"]["pledge_relationship_start"][:10],
                    usd=current_tier["usd"],
                )
            )

        # Check if there's additional pages of results
        if next_page:
            results.extend(get_patrons(campaign_id=campaign_id, campaign_tiers=campaign_tiers, page=next_page) or [])

        # Return sorted results
        return sorted(results, key=lambda item: item["usd"], reverse=True)

    # Unable to retrieve patrons
    except KeyError:
        print("Warning: Cannot locate Patreon campaign. Check Patreon access token!")
        return None


__all__ = ["Campaign", "Supporter", "SupporterTier", "get_patreon_campaign_details", "get_patrons"]
