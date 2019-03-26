# samp-forums-link-fixer
~~**As of 30/11/2018 this script is no longer needed, since YouTube links aren't blocked anymore.**~~
**As of 08/02/2019 YouTube links are blocked again!**

Script to fix censored YouTube links and embedded video players on the SA-MP Forums.

## Userscript Installation
1. Install the Tampermonkey extension for your browser.
2. Go to https://raw.githubusercontent.com/WoutProvost/samp-forums-link-fixer/master/sa-mp-links.user.js to install the userscript.

## Chrome Web Store Installation
The script is available as a Google Chrome extension and is published on the Chrome Web Store at: https://chrome.google.com/webstore/detail/sa-mp-forums-link-fixer/mholjpgmjkogjknijenkmomljgdalahj

## Manual Installation
1. Clone or download this repository and put the directory where you want.
2. Open the **Extension Management** page by navigating to `chrome://extensions` in the browser.
3. Enable **Developer Mode** by clicking the toggle switch next to **Developer mode**.
4. Click the **Load unpacked extension** button and select the previously mentioned directory.

## Description
- Video demonstration: https://www.youtube.com/watch?v=qBIpGo_E5YQ.
- The Google Chrome extension version of this script uses a page action icon shown in the browser toolbar.
- The icon will be **full-color** when users navigate to a URL that contains `forum.sa-mp.com`, showing that the script is **active** and will be **grey-scale** when users navigate to any other URL, showing that the script is **inactive**.
- When the script is active, it will scan the HTML document for any hyperlinks that look like a typical censored YouTube video URL and replace the censored URL with a working one. If the hyperlink text is also censored, it will be repaired as well.
- The script will also scan for non-working YouTube embedded video players **[ame]...[/ame]** and will replace them with a working one.
