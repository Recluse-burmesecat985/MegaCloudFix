browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);
    url.hostname = url.hostname.replace("megacloud.blog", "megacloud.tv");
    console.log("[MegaCloudFix] Redirecting:", details.url, "->", url.toString());
    return { redirectUrl: url.toString() };
  },
  { urls: ["*://*.megacloud.blog/*"] },
  ["blocking"]
);

console.log("[MegaCloudFix] webRequest listener registered.");
