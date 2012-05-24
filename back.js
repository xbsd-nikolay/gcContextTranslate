var c = function (onClickInfo, tab){

    text = onClickInfo.selectionText;
    chrome.tabs.create({
        url: "http://translate.google.com/#en|ru|" + text  
    });
};

chrome.contextMenus.create({
    title: "Translate \"%s\" to Ru",
    contexts: ["selection"],
    onclick: c
});

