/*
** Hiding the elements in the right Column
** added hide the entire column - needs to be tested
*/

var db;

chrome.extension.sendRequest("ledokaaoodnghhbbeeofdplhihinhbcb", {action: "getLocalStorage"}, function(response) {
	db = response.status;
	
	var rightCol = ".c-cH-V";
	var circles = ".c-Ob-DA";
	var circlesT = ".Xz.a-l-k";
	var circlesTT = ".c-Ob-vn";
	var sugg = ".Lia";
	var suggT = ".HT";
	var suggTT = ".eQ, .n-Za-La-fg, .FT";
	var invites = ".EZ, .Ela, .e-b-ca"; //Title, Picture, Button
	var invitesT = ".EZ";
	var invitesTT = ".Dla";
	var hTitle = ".c-ge-Hl-mc-Y";
	var hText = ".c-ge-Hl-E, .c-ge-Hl-b";
	var hButton = ".c-ge-Hl-b, .gHG7oe"; //Picture, Button
	/* Merging Pages, Games, Mobile, and Invites into one hide because seperating them is a pain in the ass
	var mobile = ".Vp, .fL"; //Title, Picture and Button
	var mobileT = ".Vp";
	var mobileTT = ".c-G-j:not(.c-i-j-ua)";
	*/
	var feedback = "";
	var feedbackTT = ".c-zh-Wf-b";
	var games = ".Vp, .Ie";
	var pages = ".EZ, .u7";
	var display = "{display: none !important;} ";
	var colorS = "{color: ";
	var colorE = " !important; }";
	
	var css = "";
	
	if(db["circsPic"] == "true") 
		css += circles + display;
	else {
		css += circlesT + colorS + db["circsPiccolor1"] + colorE;
		css += circlesTT + colorS + db["circsPiccolor2"] + colorE;
	}
	if(db["suggPic"] == "true")
		css += sugg + display;
	else {
		css += suggT + colorS + db["suggPiccolor1"] + colorE;
		css += suggTT + colorS + db["suggPiccolor2"] + colorE;
	}
	if(db["invitesPic"] == "true")
		css += invites + display;
	else {
		css += invitesT + colorS + db["invitesPiccolor1"] + colorE;
		css += invitesTT + colorS + db["invitesPiccolor2"] + colorE;
	}
	if(db["hangoutTitle"] == "true") 
		css += hTitle + "{visibility: hidden !important;} "; //keeps the spacing
	else {
		css += hTitle + colorS + db["hangoutTitlecolor1"] + colorE;
	}
	if(db["hangoutText"] == "true")
		css += hText + display;
	else 
		css += hText + colorS + db["hangoutTextcolor2"] + colorE;
	if(db["hangoutButton"] == "true")
		css += hButton + display;
	/*
	if(db["mobilePic"] == "true")
		css += mobile + "{visibility: hidden !important;} "; //keeps the padding
	else {
		css += mobileT + colorS + db["mobilePiccolor1"] + colorE;
		css += mobileTT + colorS + db["mobilePiccolor2"] + colorE;
	}
	*/
	if(db['pagesPic'] == "true")
		css += pages + display;
	if(db['gamesPic'] == "true")
		css += games + display;
	if(db["feedback"] == "true") 
		css += feedback + display;
	else
		css += feedbackTT + colorS + db["feedbackcolor2"] + colorE;
	//*********** TO BE IMPLIMENTED ********************
	if(db["hideRCol"] == "true")
		css += rightCol + display;
		
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
});