
function searchString(s) {
    var urlprefix="http://www.haskell.org/hoogle/?hoogle=";
    return urlprefix+s;
}

function navigate(url){
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.update(tab.id, {url:url});
    });
}

chrome.omnibox.onInputEntered.addListener(
    function(text){
        var url =  searchString(text);
        navigate(url);
    }
);

chrome.omnibox.onInputChanged.addListener(
    function(text, suggest) {
        results=[{content: searchString(text), description: text}];
        suggest(results);
});
