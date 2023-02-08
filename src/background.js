chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            id: 1,
            priority: 1,
            action: {
                type: 'modifyHeaders',
                requestHeaders: [{ header: 'origin', operation: 'set', value: 'https://www.facebook.com' }],
            },
            condition: { urlFilter: 'facebook.com', resourceTypes: ['xmlhttprequest'] },
        },
    ],
    removeRuleIds: [1],
});
chrome.action.onClicked.addListener((tab) => {
    const url = chrome.runtime.getURL('popup.html');
    console.log('url', url);
    chrome.tabs.create({
        url,
    });
});
