// Generated by quicktype. Do not manually modify this file.

// To parse this data:
//
//   import { Convert, Campaign, Card, CardType, FilterSettings, ImportSite, Language, NewCardsFirstPage, SearchQuery, SearchSettings, SearchTypeSettings, SortBy, Source, SourceContribution, SourceSettings, SourceType, Supporter, SupporterTier, Tag, CardbacksRequest, CardbacksResponse, CardsRequest, CardsResponse, ContributionsResponse, DFCPairsResponse, EditorSearchRequest, EditorSearchResponse, ErrorResponse, ExploreSearchRequest, ExploreSearchResponse, ImportSiteDecklistRequest, ImportSiteDecklistResponse, ImportSitesResponse, InfoResponse, LanguagesResponse, NewCardsFirstPagesResponse, NewCardsPageResponse, PatreonResponse, SampleCardsResponse, SearchEngineHealthResponse, SourcesResponse, TagsResponse } from "./file";
//
//   const campaign = Convert.toCampaign(json);
//   const card = Convert.toCard(json);
//   const cardType = Convert.toCardType(json);
//   const filterSettings = Convert.toFilterSettings(json);
//   const importSite = Convert.toImportSite(json);
//   const language = Convert.toLanguage(json);
//   const newCardsFirstPage = Convert.toNewCardsFirstPage(json);
//   const searchQuery = Convert.toSearchQuery(json);
//   const searchSettings = Convert.toSearchSettings(json);
//   const searchTypeSettings = Convert.toSearchTypeSettings(json);
//   const sortBy = Convert.toSortBy(json);
//   const source = Convert.toSource(json);
//   const sourceContribution = Convert.toSourceContribution(json);
//   const sourceRow = Convert.toSourceRow(json);
//   const sourceSettings = Convert.toSourceSettings(json);
//   const sourceType = Convert.toSourceType(json);
//   const supporter = Convert.toSupporter(json);
//   const supporterTier = Convert.toSupporterTier(json);
//   const tag = Convert.toTag(json);
//   const cardbacksRequest = Convert.toCardbacksRequest(json);
//   const cardbacksResponse = Convert.toCardbacksResponse(json);
//   const cardsRequest = Convert.toCardsRequest(json);
//   const cardsResponse = Convert.toCardsResponse(json);
//   const contributionsResponse = Convert.toContributionsResponse(json);
//   const dFCPairsResponse = Convert.toDFCPairsResponse(json);
//   const editorSearchRequest = Convert.toEditorSearchRequest(json);
//   const editorSearchResponse = Convert.toEditorSearchResponse(json);
//   const errorResponse = Convert.toErrorResponse(json);
//   const exploreSearchRequest = Convert.toExploreSearchRequest(json);
//   const exploreSearchResponse = Convert.toExploreSearchResponse(json);
//   const importSiteDecklistRequest = Convert.toImportSiteDecklistRequest(json);
//   const importSiteDecklistResponse = Convert.toImportSiteDecklistResponse(json);
//   const importSitesResponse = Convert.toImportSitesResponse(json);
//   const infoResponse = Convert.toInfoResponse(json);
//   const languagesResponse = Convert.toLanguagesResponse(json);
//   const newCardsFirstPagesResponse = Convert.toNewCardsFirstPagesResponse(json);
//   const newCardsPageResponse = Convert.toNewCardsPageResponse(json);
//   const patreonResponse = Convert.toPatreonResponse(json);
//   const sampleCardsResponse = Convert.toSampleCardsResponse(json);
//   const searchEngineHealthResponse = Convert.toSearchEngineHealthResponse(json);
//   const sourcesResponse = Convert.toSourcesResponse(json);
//   const tagsResponse = Convert.toTagsResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CardbacksRequest {
  searchSettings: SearchSettings;
}

export interface SearchSettings {
  filterSettings: FilterSettings;
  searchTypeSettings: SearchTypeSettings;
  sourceSettings: SourceSettings;
}

export interface FilterSettings {
  /**
   * The tags which the cards must *not* have to be included in search results
   */
  excludesTags: string[];
  /**
   * The tags which the cards must have to be included in search results
   */
  includesTags: string[];
  /**
   * The language the cards have to be written in to be included in search results
   */
  languages: string[];
  /**
   * The maximum DPI that cards can have to be included in search results
   */
  maximumDPI: number;
  /**
   * The maximum filesize that cards can have to be included in search results
   */
  maximumSize: number;
  /**
   * The minimum DPI that cards must meet to be included in search results
   */
  minimumDPI: number;
}

export interface SearchTypeSettings {
  /**
   * Whether search settings apply to cardbacks or not
   */
  filterCardbacks: boolean;
  /**
   * Whether fuzzy search is enabled
   */
  fuzzySearch: boolean;
}

export interface SourceSettings {
  /**
   * The list of sources in the order they should be searched
   */
  sources: Array<Array<boolean | number>>;
}

export interface CardbacksResponse {
  cardbacks: string[];
}

export interface CardsRequest {
  cardIdentifiers: string[];
}

export interface CardsResponse {
  results: { [key: string]: Card };
}

export interface Card {
  cardType: CardType;
  /**
   * Created date - formatted by backend
   */
  date: string;
  downloadLink: string;
  dpi: number;
  extension: string;
  identifier: string;
  language: string;
  mediumThumbnailUrl: string;
  name: string;
  priority: number;
  searchq: string;
  size: number;
  smallThumbnailUrl: string;
  source: string;
  sourceExternalLink?: string;
  sourceId: number;
  sourceName: string;
  sourceType?: SourceType;
  sourceVerbose: string;
  tags: string[];
}

export enum CardType {
  Card = "CARD",
  Cardback = "CARDBACK",
  Token = "TOKEN",
}

export enum SourceType {
  AwsS3 = "AWS S3",
  GoogleDrive = "Google Drive",
  LocalFile = "Local File",
}

export interface ContributionsResponse {
  cardCountByType: { [key: string]: number };
  sources: SourceContribution[];
  totalDatabaseSize: number;
}

export interface SourceContribution {
  avgdpi: string;
  description: string;
  externalLink?: string;
  name: string;
  qtyCardbacks: string;
  qtyCards: string;
  qtyTokens: string;
  size: string;
  sourceType: SourceType;
}

export interface DFCPairsResponse {
  dfcPairs: { [key: string]: string };
}

export interface EditorSearchRequest {
  queries: SearchQuery[];
  searchSettings: SearchSettings;
}

export interface SearchQuery {
  cardType: CardType;
  query: null | string;
}

export interface EditorSearchResponse {
  results: { [key: string]: { [key: string]: string[] } };
}

export interface ErrorResponse {
  errors?: { [key: string]: any }[];
  message?: string;
  name: string;
}

export interface ExploreSearchRequest {
  cardTypes: CardType[];
  pageSize: number;
  pageStart: number;
  query: null | string;
  searchSettings: SearchSettings;
  sortBy: SortBy;
}

export enum SortBy {
  DateAscending = "dateAscending",
  DateDescending = "dateDescending",
  NameAscending = "nameAscending",
  NameDescending = "nameDescending",
}

export interface ExploreSearchResponse {
  cards: Card[];
  count: number;
}

export interface ImportSiteDecklistRequest {
  url: string;
}

export interface ImportSiteDecklistResponse {
  cards: string;
}

export interface ImportSitesResponse {
  importSites: ImportSite[];
}

export interface ImportSite {
  name: string;
  url: string;
}

export interface InfoResponse {
  info: Info;
}

export interface Info {
  description: null | string;
  discord: null | string;
  email: null | string;
  name: null | string;
  reddit: null | string;
}

export interface LanguagesResponse {
  languages: Language[];
}

export interface Language {
  code: string;
  name: string;
}

export interface NewCardsFirstPagesResponse {
  results: { [key: string]: NewCardsFirstPage };
}

export interface NewCardsFirstPage {
  cards: Card[];
  hits: number;
  pages: number;
  source: Source;
}

export interface Source {
  description: string;
  externalLink?: string;
  key: string;
  name: string;
  /**
   * Primary key
   */
  pk: number;
  sourceType: SourceType;
}

export interface NewCardsPageResponse {
  cards: Card[];
}

export interface PatreonResponse {
  patreon: Patreon;
}

export interface Patreon {
  campaign: Campaign | null;
  members: Supporter[];
  tiers: { [key: string]: SupporterTier } | null;
  url: null | string;
}

export interface Campaign {
  about: string;
  id: string;
}

export interface Supporter {
  date: string;
  name: string;
  tier: string;
  usd: number;
}

export interface SupporterTier {
  description: string;
  title: string;
  usd: number;
}

export interface SampleCardsResponse {
  cards: Cards;
  [property: string]: any;
}

export interface Cards {
  CARD: Card[];
  CARDBACK: Card[];
  TOKEN: Card[];
  [property: string]: any;
}

export interface SearchEngineHealthResponse {
  online: boolean;
}

export interface SourcesResponse {
  results: { [key: string]: Source };
}

export interface TagsResponse {
  tags: Tag[];
}

export interface Tag {
  aliases?: string[];
  children: ChildElement[];
  isEnabledByDefault?: boolean;
  name: string;
  parent: null | string;
}

export interface ChildElement {
  aliases?: string[];
  children: ChildElement[];
  isEnabledByDefault?: boolean;
  name: string;
  parent: null | string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCampaign(json: string): Campaign | null {
    return cast(JSON.parse(json), u(r("Campaign"), null));
  }

  public static campaignToJson(value: Campaign | null): string {
    return JSON.stringify(uncast(value, u(r("Campaign"), null)), null, 2);
  }

  public static toCard(json: string): Card {
    return cast(JSON.parse(json), r("Card"));
  }

  public static cardToJson(value: Card): string {
    return JSON.stringify(uncast(value, r("Card")), null, 2);
  }

  public static toCardType(json: string): CardType {
    return cast(JSON.parse(json), r("CardType"));
  }

  public static cardTypeToJson(value: CardType): string {
    return JSON.stringify(uncast(value, r("CardType")), null, 2);
  }

  public static toFilterSettings(json: string): FilterSettings {
    return cast(JSON.parse(json), r("FilterSettings"));
  }

  public static filterSettingsToJson(value: FilterSettings): string {
    return JSON.stringify(uncast(value, r("FilterSettings")), null, 2);
  }

  public static toImportSite(json: string): ImportSite {
    return cast(JSON.parse(json), r("ImportSite"));
  }

  public static importSiteToJson(value: ImportSite): string {
    return JSON.stringify(uncast(value, r("ImportSite")), null, 2);
  }

  public static toLanguage(json: string): Language {
    return cast(JSON.parse(json), r("Language"));
  }

  public static languageToJson(value: Language): string {
    return JSON.stringify(uncast(value, r("Language")), null, 2);
  }

  public static toNewCardsFirstPage(json: string): NewCardsFirstPage {
    return cast(JSON.parse(json), r("NewCardsFirstPage"));
  }

  public static newCardsFirstPageToJson(value: NewCardsFirstPage): string {
    return JSON.stringify(uncast(value, r("NewCardsFirstPage")), null, 2);
  }

  public static toSearchQuery(json: string): SearchQuery {
    return cast(JSON.parse(json), r("SearchQuery"));
  }

  public static searchQueryToJson(value: SearchQuery): string {
    return JSON.stringify(uncast(value, r("SearchQuery")), null, 2);
  }

  public static toSearchSettings(json: string): SearchSettings {
    return cast(JSON.parse(json), r("SearchSettings"));
  }

  public static searchSettingsToJson(value: SearchSettings): string {
    return JSON.stringify(uncast(value, r("SearchSettings")), null, 2);
  }

  public static toSearchTypeSettings(json: string): SearchTypeSettings {
    return cast(JSON.parse(json), r("SearchTypeSettings"));
  }

  public static searchTypeSettingsToJson(value: SearchTypeSettings): string {
    return JSON.stringify(uncast(value, r("SearchTypeSettings")), null, 2);
  }

  public static toSortBy(json: string): SortBy {
    return cast(JSON.parse(json), r("SortBy"));
  }

  public static sortByToJson(value: SortBy): string {
    return JSON.stringify(uncast(value, r("SortBy")), null, 2);
  }

  public static toSource(json: string): Source {
    return cast(JSON.parse(json), r("Source"));
  }

  public static sourceToJson(value: Source): string {
    return JSON.stringify(uncast(value, r("Source")), null, 2);
  }

  public static toSourceContribution(json: string): SourceContribution {
    return cast(JSON.parse(json), r("SourceContribution"));
  }

  public static sourceContributionToJson(value: SourceContribution): string {
    return JSON.stringify(uncast(value, r("SourceContribution")), null, 2);
  }

  public static toSourceRow(json: string): Array<boolean | number> {
    return cast(JSON.parse(json), a(u(true, 0)));
  }

  public static sourceRowToJson(value: Array<boolean | number>): string {
    return JSON.stringify(uncast(value, a(u(true, 0))), null, 2);
  }

  public static toSourceSettings(json: string): SourceSettings {
    return cast(JSON.parse(json), r("SourceSettings"));
  }

  public static sourceSettingsToJson(value: SourceSettings): string {
    return JSON.stringify(uncast(value, r("SourceSettings")), null, 2);
  }

  public static toSourceType(json: string): SourceType {
    return cast(JSON.parse(json), r("SourceType"));
  }

  public static sourceTypeToJson(value: SourceType): string {
    return JSON.stringify(uncast(value, r("SourceType")), null, 2);
  }

  public static toSupporter(json: string): Supporter {
    return cast(JSON.parse(json), r("Supporter"));
  }

  public static supporterToJson(value: Supporter): string {
    return JSON.stringify(uncast(value, r("Supporter")), null, 2);
  }

  public static toSupporterTier(json: string): SupporterTier {
    return cast(JSON.parse(json), r("SupporterTier"));
  }

  public static supporterTierToJson(value: SupporterTier): string {
    return JSON.stringify(uncast(value, r("SupporterTier")), null, 2);
  }

  public static toTag(json: string): Tag {
    return cast(JSON.parse(json), r("Tag"));
  }

  public static tagToJson(value: Tag): string {
    return JSON.stringify(uncast(value, r("Tag")), null, 2);
  }

  public static toCardbacksRequest(json: string): CardbacksRequest {
    return cast(JSON.parse(json), r("CardbacksRequest"));
  }

  public static cardbacksRequestToJson(value: CardbacksRequest): string {
    return JSON.stringify(uncast(value, r("CardbacksRequest")), null, 2);
  }

  public static toCardbacksResponse(json: string): CardbacksResponse {
    return cast(JSON.parse(json), r("CardbacksResponse"));
  }

  public static cardbacksResponseToJson(value: CardbacksResponse): string {
    return JSON.stringify(uncast(value, r("CardbacksResponse")), null, 2);
  }

  public static toCardsRequest(json: string): CardsRequest {
    return cast(JSON.parse(json), r("CardsRequest"));
  }

  public static cardsRequestToJson(value: CardsRequest): string {
    return JSON.stringify(uncast(value, r("CardsRequest")), null, 2);
  }

  public static toCardsResponse(json: string): CardsResponse {
    return cast(JSON.parse(json), r("CardsResponse"));
  }

  public static cardsResponseToJson(value: CardsResponse): string {
    return JSON.stringify(uncast(value, r("CardsResponse")), null, 2);
  }

  public static toContributionsResponse(json: string): ContributionsResponse {
    return cast(JSON.parse(json), r("ContributionsResponse"));
  }

  public static contributionsResponseToJson(
    value: ContributionsResponse
  ): string {
    return JSON.stringify(uncast(value, r("ContributionsResponse")), null, 2);
  }

  public static toDFCPairsResponse(json: string): DFCPairsResponse {
    return cast(JSON.parse(json), r("DFCPairsResponse"));
  }

  public static dFCPairsResponseToJson(value: DFCPairsResponse): string {
    return JSON.stringify(uncast(value, r("DFCPairsResponse")), null, 2);
  }

  public static toEditorSearchRequest(json: string): EditorSearchRequest {
    return cast(JSON.parse(json), r("EditorSearchRequest"));
  }

  public static editorSearchRequestToJson(value: EditorSearchRequest): string {
    return JSON.stringify(uncast(value, r("EditorSearchRequest")), null, 2);
  }

  public static toEditorSearchResponse(json: string): EditorSearchResponse {
    return cast(JSON.parse(json), r("EditorSearchResponse"));
  }

  public static editorSearchResponseToJson(
    value: EditorSearchResponse
  ): string {
    return JSON.stringify(uncast(value, r("EditorSearchResponse")), null, 2);
  }

  public static toErrorResponse(json: string): ErrorResponse {
    return cast(JSON.parse(json), r("ErrorResponse"));
  }

  public static errorResponseToJson(value: ErrorResponse): string {
    return JSON.stringify(uncast(value, r("ErrorResponse")), null, 2);
  }

  public static toExploreSearchRequest(json: string): ExploreSearchRequest {
    return cast(JSON.parse(json), r("ExploreSearchRequest"));
  }

  public static exploreSearchRequestToJson(
    value: ExploreSearchRequest
  ): string {
    return JSON.stringify(uncast(value, r("ExploreSearchRequest")), null, 2);
  }

  public static toExploreSearchResponse(json: string): ExploreSearchResponse {
    return cast(JSON.parse(json), r("ExploreSearchResponse"));
  }

  public static exploreSearchResponseToJson(
    value: ExploreSearchResponse
  ): string {
    return JSON.stringify(uncast(value, r("ExploreSearchResponse")), null, 2);
  }

  public static toImportSiteDecklistRequest(
    json: string
  ): ImportSiteDecklistRequest {
    return cast(JSON.parse(json), r("ImportSiteDecklistRequest"));
  }

  public static importSiteDecklistRequestToJson(
    value: ImportSiteDecklistRequest
  ): string {
    return JSON.stringify(
      uncast(value, r("ImportSiteDecklistRequest")),
      null,
      2
    );
  }

  public static toImportSiteDecklistResponse(
    json: string
  ): ImportSiteDecklistResponse {
    return cast(JSON.parse(json), r("ImportSiteDecklistResponse"));
  }

  public static importSiteDecklistResponseToJson(
    value: ImportSiteDecklistResponse
  ): string {
    return JSON.stringify(
      uncast(value, r("ImportSiteDecklistResponse")),
      null,
      2
    );
  }

  public static toImportSitesResponse(json: string): ImportSitesResponse {
    return cast(JSON.parse(json), r("ImportSitesResponse"));
  }

  public static importSitesResponseToJson(value: ImportSitesResponse): string {
    return JSON.stringify(uncast(value, r("ImportSitesResponse")), null, 2);
  }

  public static toInfoResponse(json: string): InfoResponse {
    return cast(JSON.parse(json), r("InfoResponse"));
  }

  public static infoResponseToJson(value: InfoResponse): string {
    return JSON.stringify(uncast(value, r("InfoResponse")), null, 2);
  }

  public static toLanguagesResponse(json: string): LanguagesResponse {
    return cast(JSON.parse(json), r("LanguagesResponse"));
  }

  public static languagesResponseToJson(value: LanguagesResponse): string {
    return JSON.stringify(uncast(value, r("LanguagesResponse")), null, 2);
  }

  public static toNewCardsFirstPagesResponse(
    json: string
  ): NewCardsFirstPagesResponse {
    return cast(JSON.parse(json), r("NewCardsFirstPagesResponse"));
  }

  public static newCardsFirstPagesResponseToJson(
    value: NewCardsFirstPagesResponse
  ): string {
    return JSON.stringify(
      uncast(value, r("NewCardsFirstPagesResponse")),
      null,
      2
    );
  }

  public static toNewCardsPageResponse(json: string): NewCardsPageResponse {
    return cast(JSON.parse(json), r("NewCardsPageResponse"));
  }

  public static newCardsPageResponseToJson(
    value: NewCardsPageResponse
  ): string {
    return JSON.stringify(uncast(value, r("NewCardsPageResponse")), null, 2);
  }

  public static toPatreonResponse(json: string): PatreonResponse {
    return cast(JSON.parse(json), r("PatreonResponse"));
  }

  public static patreonResponseToJson(value: PatreonResponse): string {
    return JSON.stringify(uncast(value, r("PatreonResponse")), null, 2);
  }

  public static toSampleCardsResponse(json: string): SampleCardsResponse {
    return cast(JSON.parse(json), r("SampleCardsResponse"));
  }

  public static sampleCardsResponseToJson(value: SampleCardsResponse): string {
    return JSON.stringify(uncast(value, r("SampleCardsResponse")), null, 2);
  }

  public static toSearchEngineHealthResponse(
    json: string
  ): SearchEngineHealthResponse {
    return cast(JSON.parse(json), r("SearchEngineHealthResponse"));
  }

  public static searchEngineHealthResponseToJson(
    value: SearchEngineHealthResponse
  ): string {
    return JSON.stringify(
      uncast(value, r("SearchEngineHealthResponse")),
      null,
      2
    );
  }

  public static toSourcesResponse(json: string): SourcesResponse {
    return cast(JSON.parse(json), r("SourcesResponse"));
  }

  public static sourcesResponseToJson(value: SourcesResponse): string {
    return JSON.stringify(uncast(value, r("SourcesResponse")), null, 2);
  }

  public static toTagsResponse(json: string): TagsResponse {
    return cast(JSON.parse(json), r("TagsResponse"));
  }

  public static tagsResponseToJson(value: TagsResponse): string {
    return JSON.stringify(uncast(value, r("TagsResponse")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(", ")}]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = "",
  parent: any = ""
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  CardbacksRequest: o(
    [
      {
        json: "searchSettings",
        js: "searchSettings",
        typ: r("SearchSettings"),
      },
    ],
    false
  ),
  SearchSettings: o(
    [
      {
        json: "filterSettings",
        js: "filterSettings",
        typ: r("FilterSettings"),
      },
      {
        json: "searchTypeSettings",
        js: "searchTypeSettings",
        typ: r("SearchTypeSettings"),
      },
      {
        json: "sourceSettings",
        js: "sourceSettings",
        typ: r("SourceSettings"),
      },
    ],
    false
  ),
  FilterSettings: o(
    [
      { json: "excludesTags", js: "excludesTags", typ: a("") },
      { json: "includesTags", js: "includesTags", typ: a("") },
      { json: "languages", js: "languages", typ: a("") },
      { json: "maximumDPI", js: "maximumDPI", typ: 0 },
      { json: "maximumSize", js: "maximumSize", typ: 0 },
      { json: "minimumDPI", js: "minimumDPI", typ: 0 },
    ],
    false
  ),
  SearchTypeSettings: o(
    [
      { json: "filterCardbacks", js: "filterCardbacks", typ: true },
      { json: "fuzzySearch", js: "fuzzySearch", typ: true },
    ],
    false
  ),
  SourceSettings: o(
    [{ json: "sources", js: "sources", typ: a(a(u(true, 0))) }],
    false
  ),
  CardbacksResponse: o(
    [{ json: "cardbacks", js: "cardbacks", typ: a("") }],
    false
  ),
  CardsRequest: o(
    [{ json: "cardIdentifiers", js: "cardIdentifiers", typ: a("") }],
    false
  ),
  CardsResponse: o(
    [{ json: "results", js: "results", typ: m(r("Card")) }],
    false
  ),
  Card: o(
    [
      { json: "cardType", js: "cardType", typ: r("CardType") },
      { json: "date", js: "date", typ: "" },
      { json: "downloadLink", js: "downloadLink", typ: "" },
      { json: "dpi", js: "dpi", typ: 0 },
      { json: "extension", js: "extension", typ: "" },
      { json: "identifier", js: "identifier", typ: "" },
      { json: "language", js: "language", typ: "" },
      { json: "mediumThumbnailUrl", js: "mediumThumbnailUrl", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "priority", js: "priority", typ: 0 },
      { json: "searchq", js: "searchq", typ: "" },
      { json: "size", js: "size", typ: 0 },
      { json: "smallThumbnailUrl", js: "smallThumbnailUrl", typ: "" },
      { json: "source", js: "source", typ: "" },
      {
        json: "sourceExternalLink",
        js: "sourceExternalLink",
        typ: u(undefined, ""),
      },
      { json: "sourceId", js: "sourceId", typ: 0 },
      { json: "sourceName", js: "sourceName", typ: "" },
      {
        json: "sourceType",
        js: "sourceType",
        typ: u(undefined, r("SourceType")),
      },
      { json: "sourceVerbose", js: "sourceVerbose", typ: "" },
      { json: "tags", js: "tags", typ: a("") },
    ],
    false
  ),
  ContributionsResponse: o(
    [
      { json: "cardCountByType", js: "cardCountByType", typ: m(0) },
      { json: "sources", js: "sources", typ: a(r("SourceContribution")) },
      { json: "totalDatabaseSize", js: "totalDatabaseSize", typ: 0 },
    ],
    false
  ),
  SourceContribution: o(
    [
      { json: "avgdpi", js: "avgdpi", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "externalLink", js: "externalLink", typ: u(undefined, "") },
      { json: "name", js: "name", typ: "" },
      { json: "qtyCardbacks", js: "qtyCardbacks", typ: "" },
      { json: "qtyCards", js: "qtyCards", typ: "" },
      { json: "qtyTokens", js: "qtyTokens", typ: "" },
      { json: "size", js: "size", typ: "" },
      { json: "sourceType", js: "sourceType", typ: r("SourceType") },
    ],
    false
  ),
  DFCPairsResponse: o(
    [{ json: "dfcPairs", js: "dfcPairs", typ: m("") }],
    false
  ),
  EditorSearchRequest: o(
    [
      { json: "queries", js: "queries", typ: a(r("SearchQuery")) },
      {
        json: "searchSettings",
        js: "searchSettings",
        typ: r("SearchSettings"),
      },
    ],
    false
  ),
  SearchQuery: o(
    [
      { json: "cardType", js: "cardType", typ: r("CardType") },
      { json: "query", js: "query", typ: u(null, "") },
    ],
    false
  ),
  EditorSearchResponse: o(
    [{ json: "results", js: "results", typ: m(m(a(""))) }],
    false
  ),
  ErrorResponse: o(
    [
      { json: "errors", js: "errors", typ: u(undefined, a(m("any"))) },
      { json: "message", js: "message", typ: u(undefined, "") },
      { json: "name", js: "name", typ: "" },
    ],
    false
  ),
  ExploreSearchRequest: o(
    [
      { json: "cardTypes", js: "cardTypes", typ: a(r("CardType")) },
      { json: "pageSize", js: "pageSize", typ: 0 },
      { json: "pageStart", js: "pageStart", typ: 0 },
      { json: "query", js: "query", typ: u(null, "") },
      {
        json: "searchSettings",
        js: "searchSettings",
        typ: r("SearchSettings"),
      },
      { json: "sortBy", js: "sortBy", typ: r("SortBy") },
    ],
    false
  ),
  ExploreSearchResponse: o(
    [
      { json: "cards", js: "cards", typ: a(r("Card")) },
      { json: "count", js: "count", typ: 0 },
    ],
    false
  ),
  ImportSiteDecklistRequest: o([{ json: "url", js: "url", typ: "" }], false),
  ImportSiteDecklistResponse: o(
    [{ json: "cards", js: "cards", typ: "" }],
    false
  ),
  ImportSitesResponse: o(
    [{ json: "importSites", js: "importSites", typ: a(r("ImportSite")) }],
    false
  ),
  ImportSite: o(
    [
      { json: "name", js: "name", typ: "" },
      { json: "url", js: "url", typ: "" },
    ],
    false
  ),
  InfoResponse: o([{ json: "info", js: "info", typ: r("Info") }], false),
  Info: o(
    [
      { json: "description", js: "description", typ: u(null, "") },
      { json: "discord", js: "discord", typ: u(null, "") },
      { json: "email", js: "email", typ: u(null, "") },
      { json: "name", js: "name", typ: u(null, "") },
      { json: "reddit", js: "reddit", typ: u(null, "") },
    ],
    false
  ),
  LanguagesResponse: o(
    [{ json: "languages", js: "languages", typ: a(r("Language")) }],
    false
  ),
  Language: o(
    [
      { json: "code", js: "code", typ: "" },
      { json: "name", js: "name", typ: "" },
    ],
    false
  ),
  NewCardsFirstPagesResponse: o(
    [{ json: "results", js: "results", typ: m(r("NewCardsFirstPage")) }],
    false
  ),
  NewCardsFirstPage: o(
    [
      { json: "cards", js: "cards", typ: a(r("Card")) },
      { json: "hits", js: "hits", typ: 0 },
      { json: "pages", js: "pages", typ: 0 },
      { json: "source", js: "source", typ: r("Source") },
    ],
    false
  ),
  Source: o(
    [
      { json: "description", js: "description", typ: "" },
      { json: "externalLink", js: "externalLink", typ: u(undefined, "") },
      { json: "key", js: "key", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "pk", js: "pk", typ: 0 },
      { json: "sourceType", js: "sourceType", typ: r("SourceType") },
    ],
    false
  ),
  NewCardsPageResponse: o(
    [{ json: "cards", js: "cards", typ: a(r("Card")) }],
    false
  ),
  PatreonResponse: o(
    [{ json: "patreon", js: "patreon", typ: r("Patreon") }],
    false
  ),
  Patreon: o(
    [
      { json: "campaign", js: "campaign", typ: u(r("Campaign"), null) },
      { json: "members", js: "members", typ: a(r("Supporter")) },
      { json: "tiers", js: "tiers", typ: u(m(r("SupporterTier")), null) },
      { json: "url", js: "url", typ: u(null, "") },
    ],
    false
  ),
  Campaign: o(
    [
      { json: "about", js: "about", typ: "" },
      { json: "id", js: "id", typ: "" },
    ],
    false
  ),
  Supporter: o(
    [
      { json: "date", js: "date", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "tier", js: "tier", typ: "" },
      { json: "usd", js: "usd", typ: 3.14 },
    ],
    false
  ),
  SupporterTier: o(
    [
      { json: "description", js: "description", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "usd", js: "usd", typ: 3.14 },
    ],
    false
  ),
  SampleCardsResponse: o(
    [{ json: "cards", js: "cards", typ: r("Cards") }],
    "any"
  ),
  Cards: o(
    [
      { json: "CARD", js: "CARD", typ: a(r("Card")) },
      { json: "CARDBACK", js: "CARDBACK", typ: a(r("Card")) },
      { json: "TOKEN", js: "TOKEN", typ: a(r("Card")) },
    ],
    "any"
  ),
  SearchEngineHealthResponse: o(
    [{ json: "online", js: "online", typ: true }],
    false
  ),
  SourcesResponse: o(
    [{ json: "results", js: "results", typ: m(r("Source")) }],
    false
  ),
  TagsResponse: o([{ json: "tags", js: "tags", typ: a(r("Tag")) }], false),
  Tag: o(
    [
      { json: "aliases", js: "aliases", typ: u(undefined, a("")) },
      { json: "children", js: "children", typ: a(r("ChildElement")) },
      {
        json: "isEnabledByDefault",
        js: "isEnabledByDefault",
        typ: u(undefined, true),
      },
      { json: "name", js: "name", typ: "" },
      { json: "parent", js: "parent", typ: u(null, "") },
    ],
    false
  ),
  ChildElement: o(
    [
      { json: "aliases", js: "aliases", typ: u(undefined, a("")) },
      { json: "children", js: "children", typ: a(r("ChildElement")) },
      {
        json: "isEnabledByDefault",
        js: "isEnabledByDefault",
        typ: u(undefined, true),
      },
      { json: "name", js: "name", typ: "" },
      { json: "parent", js: "parent", typ: u(null, "") },
    ],
    false
  ),
  CardType: ["CARD", "CARDBACK", "TOKEN"],
  SourceType: ["AWS S3", "Google Drive", "Local File"],
  SortBy: [
    "dateAscending",
    "dateDescending",
    "nameAscending",
    "nameDescending",
  ],
};
