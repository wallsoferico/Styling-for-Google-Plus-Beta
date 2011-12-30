//Code for retrieving Unread Gmail Count adapted from Google Reader Notifier (by Google) and GTools+
function getGUnreadCount() {
	var gcount;
	var title;
	var name;
	var xhr = new XMLHttpRequest();
	var abortTimerId = window.setTimeout(function() {
		xhr.abort();
	}, 10000);
		
	function handleSuccess(jsonText) {
		window.clearTimeout(abortTimerId);
		
		gcount = jsonText.substring(jsonText.indexOf("<fullcount>") + 11, jsonText.indexOf("</fullcount>"));
		document.getElementById('gcounter').innerHTML = gcount;
		gmailPopup(jsonText);
		//setInterval(gmailPopup(jsonText), 60000);
	}
	
	try {
		//console.log('request..');
		xhr.onreadystatechange = function() {
			//console.log('readystate: ' + xhr.readyState);
			if (xhr.readyState == 4) {
				if (xhr.status >= 400) {
					//console.log('Error response code: ' + xhr.status + '/' + xhr.statusText);
					gcount = 0;
				} else if (xhr.responseText) {
					//console.log('responseText: ' + xhr.responseText.substring(0, 200) + '...');
					handleSuccess(xhr.responseText);
				} else {
					//console.log('No responseText!');
				}
			}
		}

		xhr.onerror = function(error) {
			console.log('error');
			console.log(error);
			//handleError();
		}

		xhr.open('GET', "https://mail.google.com/mail/feed/atom", true);
		xhr.send(null);
	} catch (e) {
		console.log('XHR exception: ' + e);
		//handleError();
	}
}

function gmailPopup(jsonText) {
	var temp = jsonText;
	var entryCount = temp.split('<entry>').length-1;
	
	if(entryCount > 4)
		entryCount = 4;
	
	temp = new String(temp.split('<entry>'));
	
	var name = new Array();
	var title = new Array();
	var link = new Array();
	for(var i = 0; i < entryCount; i++) {
		temp = temp.substring(temp.indexOf(","));
		
		title[i] = temp.substring(temp.indexOf('<title>') + 7, temp.indexOf('</title>'));
		
		link[i] = temp.substring(temp.indexOf('href=')+6, temp.indexOf("atom")+4);
		link[i] = link[i].replace(/amp;/gm, "");
			
		temp = temp.substring(temp.indexOf('<name>'));
		name[i] = temp.substring(6, temp.indexOf('</name>'));
			
		temp = temp.substring(temp.indexOf(','));
	}
	document.getElementById('unreadGmail').innerHTML = "";
	var header = document.createElement('div');
	header.id = 'headerID';
	header.setAttribute("style", "height: 30px; width: 100%; color: #CD2626 !important; border-bottom: 1px dotted black;");

	
	var gmail = document.createElement('div');
	gmail.id = 'title';
	gmail.setAttribute('style', 'font-size: 15px; color: #CD2626; margin: 0px 10px 0px 10px; font-weight: bold;');
	gmail.innerHTML = 'Gmail';

	var viewAll = document.createElement('div');
	viewAll.id = 'viewAll';
	viewAll.style.float = 'right';
	viewAll.innerHTML = "<a target='_blank' href='https://mail.google.com/mail/?tab=om#inbox'>View All</a>";
	
	gmail.appendChild(viewAll);
	header.appendChild(gmail);
	
	var innerbody = document.createElement('div');
	innerbody.id = 'innerbody';
	innerbody.setAttribute('style', 'background-color: #EEE; max-height: 500px; width: 100%;');
	
	for(var i = 0; i < entryCount; i++) {
		var entryLink = document.createElement('a');
		entryLink.href = link[i];
		entryLink.id = 'linkId';
		entryLink.target = '_blank';
		entryLink.setAttribute('style', 'text-decoration: none;');
		
		var entry = document.createElement('div');
		entry.id = 'entry';
		entry.setAttribute('style', 'font-size: 14px; color: black; border-bottom: 1px solid #AAA; height: 40px; padding-left: 10px; padding-top: 3px;');
		entry.innerHTML = "<img id='gmailIcon' src='" + chrome.extension.getURL('Gmail-Icon.png') + "' height='21px;' width='30px;' style='float: left;' />" + "&nbsp;&nbsp;&nbsp;&nbsp;" + name[i] + " >> " + title[i];
		
		entryLink.appendChild(entry);
		innerbody.appendChild(entryLink);
	}
	
	document.getElementById('unreadGmail').appendChild(header);
	document.getElementById('unreadGmail').appendChild(innerbody);
}