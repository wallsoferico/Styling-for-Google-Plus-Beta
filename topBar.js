var db;
//gets from www. to the end ie: mail.google.com/mail/
var currenthref = window.location.hostname + window.location.pathname;

chrome.extension.sendRequest("ledokaaoodnghhbbeeofdplhihinhbcb", {action: "getLocalStorage"}, function(response) {
	db = response.status;
	
//gets the username of the user
var name = document.getElementById('gb_119').innerHTML; //+name innerHTML
var temp = name.substring(0, name.indexOf('class="gbts"'));
name = name.substring(name.indexOf("+")); //+userName
name = name.substring(0, name.indexOf("<"));

//the list of links in the Google+ top bar
var plusBarList = getElementByClass(document, 'gbtc', 'ol');
plusBarList.innerHTML = "";
plusBarList.setAttribute('id', 'gbtc');

//variables for easily creating new list elements
var beg = '<a target="_blank" class="gbzt" id="';
var mid = '" href="';
var mid2 = '"> <span class="gbtb2"><span class="gbts">';
var end = '</span></span></a>';

//adds the desired links to the top bar
if(db["navName"] == "false") {	
	addToList((beg + 'gb_119' + mid + 'https://plus.google.com/' + mid2 + name + end), 'gbtc');
}

if(db["navGmail"] == "false") {
	addToList((beg + 'gb_23' + mid + 'https://mail.google.com/mail/?tab=om#inbox' + mid2 + 'Gmail' + end ), 'gbtc');
}

if(db["navCal"] == "false") {
	addToList((beg + 'gb_24' + mid + 'https://www.google.com/calendar/render?tab=Xc' + mid2 + 'Calendar' + end ), 'gbtc');
}

if(db["navDocs"] == "false") {
	addToList((beg + 'gb_25' + mid + 'https://docs.google.com/?tab=co&authuser=0#home' + mid2 + 'Documents' + end), 'gbtc');
}

if(db["navPhotos"] == "false") {
	addToList((beg + 'gb_31' + mid + 'https://picasaweb.google.com/home?tab=Xq' + mid2 + 'Photos' + end), 'gbtc');
}

if(db["navImages"] == "false") {
	addToList((beg + 'gb_2' + mid + 'http://www.google.com/imghp?tab=Xc' + mid2 + 'Images' + end), 'gbtc');
}

if(db["navVideos"] == "false") {
	addToList((beg + 'gb_12' + mid + 'http://video.google.com/?tab=Xc' + mid2 + 'Videos' + end), 'gbtc');
}

if(db["navReader"] == "false") {
	addToList((beg + 'gb_32' + mid + 'https://www.google.com/reader/view/?tab=Xy' + mid2 + 'Reader' + end), 'gbtc');
}

if(db["navMap"] == "false") {
	addToList((beg + 'gb_8' + mid + 'http://maps.google.com/?tab=Xc' + mid2 + 'Maps' + end), 'gbtc');
}

if(db["navNews"] == "false") {
	addToList((beg + 'gb_5' + mid + 'http://news.google.com/?tab=Xc' + mid2 + 'News' + end), 'gbtc');
}

if(db["navShopping"] == "false") {
	addToList((beg + 'gb_6' + mid + 'http://www.google.com/prdhp?tab=Xc' + mid2 + 'Shopping' + end), 'gbtc');
}

if(db["navWeb"] == "false") {
	addToList((beg + 'gb_1' + mid + 'http://www.google.com/?tab=Xw' + mid2 + 'Web' + end), 'gbtc');
}

if(db["navMore"] == "false") {
	addToList('<a id="gbztm" class="gbgt" href="http://www.google.com/intl/en/options/" onclick="gbar.tg(event,this)" aria-haspopup="true" aria-owns="gbd" wotsearchprocessed="true"><span class="gbtb2"></span><span id="gbztms" class="gbts gbtsa"><span id="gbztms1">more</span><span class="gbma"></span></span></a><div class="gbm" id="gbd" aria-owner="gbztm"><div class="gbmc"><ol class="gbmcc"><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_51" href="http://translate.google.com/?hl=en&amp;tab=wT" wotsearchprocessed="true">Translate</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_10" href="http://books.google.com/bkshp?hl=en&amp;tab=wp" wotsearchprocessed="true">Books</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_27" href="http://www.google.com/finance?hl=en&amp;tab=we" wotsearchprocessed="true">Finance</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_9" href="http://scholar.google.com/schhp?hl=en&amp;tab=ws" wotsearchprocessed="true">Scholar</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_13" href="http://blogsearch.google.com/?hl=en&amp;tab=wb" wotsearchprocessed="true">Blogs</a></li><li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_36" href="http://www.youtube.com/?hl=en&amp;tab=w1" wotsearchprocessed="true">YouTube</a><div wotsearchtarget="youtube.com" style="display: inline-block; cursor: pointer; width: 16px; height: 16px;">&nbsp;</div></li><li class="gbmtc"><a class="gbmt" id="gb_38" onclick="gbar.logger.il(1,{t:38})" href="http://sites.google.com/?hl=en&amp;tab=w3" wotsearchprocessed="true">Sites</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_3" href="http://groups.google.com/grphp?hl=en&amp;tab=wg" wotsearchprocessed="true">Groups</a></li><li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbmtc"><a class="gbmt" onclick="gbar.logger.il(1,{t:66})" href="http://www.google.com/intl/en/options/" wotsearchprocessed="true">even more >></a></li></ol></div></div>', 'gbtc');
}

//makes the red bar above the link you are currently on
var focusedListItem = getElementByHREF(document, currenthref, 'a');
focusedListItem.setAttribute('class', 'gbzt gbz0l gbp1');

if(db["navCalCount"] == "true") {
	document.getElementById('gb_24').innerHTML = '<span class="gbtb2"><span class="gbts">Calendar ' + '<span class="count" id="ccounter" style="background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;" ></span></span>';
	var el = document.createElement('div');
	el.id = "unreadCalendar";
	el.style.display = "none";
	document.getElementById('gb_24').appendChild(el);
	
	document.getElementById('gb_24').setAttribute('onmouseover', "document.getElementById('unreadCalendar').setAttribute('style', 'visibility: visible; position:absolute; background-color: white; border: 1px solid #CCC; width: 400px; height: 200px; overflow-x: hidden;'); document.getElementById('gb_24').parentNode.setAttribute('class', 'gbt gbto');");
	document.getElementById('gb_24').setAttribute('onmouseout', "document.getElementById('unreadCalendar').setAttribute('style', 'display: none;'); document.getElementById('gb_24').parentNode.setAttribute('class', 'gbt');");
	
	//setInterval(getCUnreadCount, 2000);
	getCUnreadCount();
}
if(db["navReaderCount"] == "true") {
	document.getElementById('gb_32').innerHTML = '<span class="gbtb2"><span class="gbts">Reader ' + '<span class="count" id="rcounter" style="background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;" ></span></span>';
	var el = document.createElement('div');
	el.id = "unreadReader";
	el.style.display = "none";
	document.getElementById('gb_32').appendChild(el);
	
	document.getElementById('gb_32').setAttribute('onmouseover', "document.getElementById('unreadReader').setAttribute('style', 'visibility: visible; position:absolute; background-color: white; border: 1px solid #CCC; width: 400px; height: 200px; overflow-x: hidden;'); document.getElementById('gb_32').parentNode.setAttribute('class', 'gbt gbto');");
	document.getElementById('gb_32').setAttribute('onmouseout', "document.getElementById('unreadReader').setAttribute('style', 'display: none;'); document.getElementById('gb_32').parentNode.setAttribute('class', 'gbt');");
	
	setInterval(getRUnreadCount, 2000);
	getRUnreadCount();
}
				
if(db["navGmailCount"] == "true") {
	document.getElementById('gb_23').innerHTML = '<span class="gbtb2"><span class="gbts">Gmail <span class="count" id="gcounter" style="background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;" ></span></span>';
	var el = document.createElement('div');
	el.id = "unreadGmail";
	el.style.display = "none";
	document.getElementById('gb_23').appendChild(el);
	
	document.getElementById('gb_23').setAttribute('onmouseover', "document.getElementById('unreadGmail').setAttribute('style', 'visibility: visible; position:absolute; background-color: white; border: 1px solid #CCC; width: 400px; height: 200px; overflow-x: hidden;'); document.getElementById('gb_23').parentNode.setAttribute('class', 'gbt gbto');");
	document.getElementById('gb_23').setAttribute('onmouseout', "document.getElementById('unreadGmail').setAttribute('style', 'display: none;'); document.getElementById('gb_23').parentNode.setAttribute('class', 'gbt');");
	
	setInterval(getGUnreadCount, 2000);
	getGUnreadCount();
}

function addToList(text, id) {
	var newList = document.createElement('li');
	newList.innerHTML = text;
	newList.setAttribute('class', 'gbt');
	document.getElementById(id).appendChild(newList, null);
}

function getElementByClass(node,searchClass,tag) {
    var els = node.getElementsByTagName(tag); // use "*" for all elements
    var elsLen = els.length;
    for (i = 0; i < elsLen; i++) {
         if (searchClass = els[i].className) {
            return els[i];
         }
    }
}

function getElementByHREF(node,searchClass,tag) {
    var els = node.getElementsByTagName(tag); // use "*" for all elements
    var elsLen = els.length;
    for (i = 0; i < elsLen; i++) {
         if (els[i].href.indexOf(searchClass) >= 0) {
            return els[i];
         }
    }
}

});