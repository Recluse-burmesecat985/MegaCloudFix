// Rules are handled declaratively in rules.json
// This file is required as a service worker entry point

chrome.runtime.onInstalled.addListener(() => {
  console.log("MegaCloudFix: megacloud.blog → megacloud.tv redirect active.");
});
