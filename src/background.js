
chrome.action.onClicked.addListener(tab => {
    const url = chrome.runtime.getURL("popup.html");
    console.log('url',url)
    chrome.tabs.create({
        url
      });
      updateDynamicRules(url, 'https://www.facebook.com/')
})
function updateDynamicRules(headerKey, headerValue) {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            { 
              header: headerKey, 
              operation: 'set', 
              value: headerValue
            },
          ],
        },
        condition: {
          regexFilter: '|http*',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'script'
          ],
        },
      },
    ],
    removeRuleIds: [1]
  }, async (result) => {
    console.log('created', result);
  });
}