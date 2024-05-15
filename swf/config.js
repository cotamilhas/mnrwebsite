window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
    // Options affecting the whole page
    "publicPath": undefined,
    "polyfills": true,

    // Options affecting files only
    "allowScriptAccess": false, // Polyfill elements have a different default value, see the allowScriptAccess section
    "autoplay": "on",
    "unmuteOverlay": "hidden",
    "backgroundColor": null,
    "wmode": "transparent",
    "letterbox": "fullscreen",
    "warnOnUnsupportedContent": true,
    "contextMenu": "on",
    "showSwfDownload": true,
    "upgradeToHttps": window.location.protocol === "https:",
    "maxExecutionDuration": 15,
    "logLevel": "error",
    "base": null,
    "menu": true,
    "salign": "",
    "forceAlign": false,
    "scale": "showAll",
    "forceScale": false,
    "frameRate": 60,
    "quality": "best",
    "splashScreen": false,
    "preferredRenderer": null,
    "openUrlMode": "allow",
    "allowNetworking": "all",
    "favorFlash": true,
    "socketProxy": [],
    "fontSources": [],
    "defaultFonts": {},
    "credentialAllowList": [],
    "playerRuntime": "flashPlayer",
    "allowFullscreen": true
};