// Code taken from here and modified: https://chrome.google.com/webstore/detail/google-maps-select-and-se/iobjmgojenedagiebkecldbpgimlchje
chrome.runtime.onInstalled.addListener(() => {
	const context = "selection";
	const title = "Search this address on OpenStreetMap";
	chrome.contextMenus.create({
		title: title,
		contexts: [context],
		id: "context" + context,
	});
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	const sText = info.selectionText;
	const url = "https://www.openstreetmap.org/search?query=" + encodeURIComponent(sText);
	chrome.tabs.create({ url: url });
});