var db;

chrome.extension.sendRequest("ledokaaoodnghhbbeeofdplhihinhbcb", {action: "getLocalStorage"}, function(response) {
	db = response.status;
	
	var leftCol = ".c-r-Qa-V";
	var proPicName = ".c-Cc-XBo9Cc"; //div inside of the div that contains the profile pic and name
	var proPic = ".c-i-Cc-Dk";
	var proName = ".c-Cc-Dr";
	var stream = ".NksfUe"
	var stream2 = ".g2Lc3b.SSGeYb, .eYNw4c";
	var incom = "a[href*='/stream/incoming']"
	var notif = "a[href*='/notifications/all']"
	var sparks = ".D09n1e, .dfrbjb";
	var chat = ".c-Qa-Fb";
	var middleComments = ".Sq";
	var display = "{display: none !important;} ";
	var colorS = "{color: ";
	var colorE = " !important; }";
	var css = "";
	
	if(db["proPic"] == "true" && db["proName"] == "true")
		css += proPicName + display;
	else if(db["proPic"] == "true")
		css += proPic + display;
	else if(db["proName"] == "true")
		css += proName + display;
	else
		css += proName + colorS + db["proNamecolor1"] + colorE;
		
	if(db["streamPic"] == "true")
		css += stream + ", " + stream2 + display;
	else {
		css += stream + colorS + db["streamPiccolor1"] + colorE;
		css += stream2 + colorS + db["streamPiccolor2"] + colorE;
	}
	if(db["streamIncom"] == "true")
		css += incom + display;
	if(db["streamNotif"] == "true")
		css += notif + display;
	if(db["sparksPic2"] == "true")
		css += sparks + display;
	else
		css += sparks + colorS + db["sparksPiccolor2"] + colorE;
	if(db["chatPic"] == "true")
		css += chat + display;
	else
		css += chat + colorS + db["chatPiccolor1"] + colorE;
	//************* TO BE IMPLIMENTED *************
	if(db["hideLCol"] == "true")
		css += leftCol + display;
		
	if(db["commentsScroll"] == "true") 
		css += middleComments + "{height: 1000px !important; overflow: auto;}";
		
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
	
	
});