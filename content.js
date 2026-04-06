// Intercept fetch and XHR at the page level to catch requests
// that may originate from iframes or injected scripts

(function () {
  const TARGET = "megacloud.blog";
  const REPLACE = "megacloud.tv";

  function fixUrl(url) {
    if (typeof url === "string" && url.includes(TARGET)) {
      return url.replace(TARGET, REPLACE);
    }
    return url;
  }

  // Patch fetch
  const originalFetch = window.fetch;
  window.fetch = function (input, init) {
    if (typeof input === "string") {
      input = fixUrl(input);
    } else if (input instanceof Request) {
      input = new Request(fixUrl(input.url), input);
    }
    return originalFetch.call(this, input, init);
  };

  // Patch XMLHttpRequest
  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    return originalOpen.call(this, method, fixUrl(url), ...rest);
  };

  console.log("[MegaCloudFix] fetch/XHR patched.");
})();
