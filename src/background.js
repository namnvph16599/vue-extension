chrome.action.onClicked.addListener(tab => {
    // console.log('tab',tab);
    const url = chrome.runtime.getURL("popup.html");
    console.log('url',url)
    chrome.tabs.create({
        url
      });
})
