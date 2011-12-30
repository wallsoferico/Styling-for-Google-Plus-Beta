/*
** all the float and scrolling stuff
** removed left/right side float because I thought it was stupid
** added scrolling comments
*/

var db;

chrome.extension.sendRequest("ledokaaoodnghhbbeeofdplhihinhbcb", {action: "getLocalStorage"}, function(response) {
	db = response.status;

	var topBar = "#gb"; //top bar with +username, gmail, calendar, etc
	var plusBar = ".c-cb-V"; //bar with home, profile, circles, etc
	var leftCol = ".c-r-Qa-V";
	var rightCol = ".c-cH-V";
	var comments = ".iA"; //the comments and more container
	var content = "#content"; //the entire page minus the topBar and plusBar
	var contentPane = ".c-r-P-V-wk-Eb"; //entire center column
	
	var css = "";
	
	if(db["float"] != "noFloat") {
		//css += topBar + "{position: fixed; width: 100%; top: 0px;} ";
		css += plusBar + "{position: fixed !important; z-index: 100;} ";
		css += content + "{padding-top: 60px;} ";
	}
	if(db["float"] == "tslBar" || db["float"] == "allBar") {
		css += leftCol + "{position: fixed !important; max-height: " + db["height2"] + "px; overflow: auto; width: 180px !important;} ";
		css += contentPane + "{margin-left: 180px; } ";
	}
	if(db["float"] == "tsrBar" || db["float"] == "allBar") {
		css += rightCol + "{position: fixed !important; max-height; " + db["height2"] + "px; overflow: auto;} ";
	}
	// *********** TO BE IMPLIMENTED *****************
	if(db["scrollComments"] == "true") {
		css += comments + "{max-height: 1000px; overflow: auto;}"
	}

	css += "::-webkit-scrollbar {width: 3px;} ";
	css += "::-webkit-scrollbar-thumb:vertical {width: 3px; background-color: grey; -webkit-border-radius: 8px;} ";
	
	if(db["scroll"] == "true") {
		css += "::-webkit-scrollbar {width: 0px} ";
	}
	
	
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
});
