browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);
    url.hostname = url.hostname.replace("megacloud.blog", "megacloud.tv");
    return { redirectUrl: url.toString() };
  },
  { urls: ["*://*.megacloud.blog/*"] },
  ["blocking"]
);
