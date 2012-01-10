
var c = function (onClickInfo, tab){

	console.log("Hello, world!")
		
	text = onClickInfo.selectionText;
	chrome.tabs.create({
		url: "http://translate.google.com/"
	});
};

console.log("Hello, world!")

chrome.contextMenus.create({
	title: "Translate %s to Ru",
	contexts: ["selection"],
	onclick: c
});
console.log("Hello, world!")