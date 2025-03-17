import sys
from typing import Optional

from selenium.webdriver import Chrome, Edge, Firefox
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.chromium.options import ChromiumOptions
from selenium.webdriver.chromium.webdriver import ChromiumDriver
from selenium.webdriver.edge.options import Options as EdgeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions


def get_chrome_driver(headless: bool = False, binary_location: Optional[str] = None) -> Chrome:
    options = ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--log-level=3")
    options.add_argument("--disable-dev-shm-usage")
    if headless:
        options.add_argument("--headless=new")
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    options.add_experimental_option("detach", True)
    if binary_location is not None:
        options.binary_location = binary_location
    driver = Chrome(options=options)
    driver.set_network_conditions(offline=False, latency=5, throughput=5 * 125000)
    return driver


def get_brave_driver(headless: bool = False, binary_location: Optional[str] = None) -> Chrome:
    options = ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--log-level=3")
    options.add_argument("--disable-dev-shm-usage")
    if headless:
        options.add_argument("--headless=new")
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    options.add_experimental_option("detach", True)

    # the binary location for brave must be manually specified (otherwise chrome will open instead)
    if binary_location is not None:
        options.binary_location = binary_location
    else:
        default_binary_locations = {
            "linux": "/usr/bin/brave-browser",
            "darwin": "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
            "win32": "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe",
        }
        if sys.platform not in default_binary_locations.keys():
            raise KeyError(
                f"Cannot determine the default Brave binary location for the operating system {sys.platform}!"
            )
        options.binary_location = default_binary_locations[sys.platform]

    driver = Chrome(options=options)
    driver.set_network_conditions(offline=False, latency=5, throughput=5 * 125000)
    return driver


def get_edge_driver(headless: bool = False, binary_location: Optional[str] = None) -> ChromiumDriver:
    options: ChromiumOptions = EdgeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--log-level=3")
    options.add_argument("--disable-dev-shm-usage")
    if headless:
        options.add_argument("--headless=new")
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    options.add_experimental_option("detach", True)
    if binary_location is not None:
        options.binary_location = binary_location
    driver: ChromiumDriver = Edge(options=options)  # type: ignore
    driver.set_network_conditions(offline=False, latency=5, throughput=5 * 125000)
    return driver


# note: firefox is not currently supported
def get_firefox_driver(headless: bool = False, binary_location: Optional[str] = None) -> Firefox:
    options = FirefoxOptions()
    options.add_argument("--log-level=3")
    if headless:
        options.add_argument("--headless")
    if binary_location is not None:
        options.binary_location = binary_location
    driver = Firefox(options=options)
    return driver
