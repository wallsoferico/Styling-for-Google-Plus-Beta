//Code for retrieving Unread Reader Count adapted from Google Reader Notifier (by Google) and GTools+
function getRUnreadCount() {
	var READING_LIST_RE_ = new RegExp('user/[\\d]+/state/com\\.google/reading-list');
	var rcount;

	var xhr = new XMLHttpRequest();
	var abortTimerId = window.setTimeout(function() {
		xhr.abort();
	}, 10000);
		
	function handleSuccess(jsonText) {
		
		window.clearTimeout(abortTimerId);
		var json;
		try {
			json = JSON.parse(jsonText);
		} catch (e) {
			return;
		}

		// Find the reading list unread count
		for (var i = 0, stream; stream = json.unreadcounts[i]; i++) {
			if (READING_LIST_RE_.test(stream.id)) {
				rcount = stream.count;
				document.getElementById('rcounter').innerHTML = rcount;
				readerPopup(jsonText);
				return;
			}
		}

		// Fallthrough: we couldn't find the reading list unread count, assume it's
		// 0 (items with a 0 unread count are not output)
		rcount = 0;
		document.getElementById('rcounter').innerHTML = rcount;
	}
			
	try {
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status >= 400) {
					rcount = 0;
				} else if (xhr.responseText) {
					handleSuccess(xhr.responseText);
				} else {
					console.log('No responseText!');
				}
			}
		}

		xhr.onerror = function(error) {
			console.log('error');
			console.log(error);
		}
		xhr.open('GET', "http://www.google.com/reader/api/0/unread-count?output=json&client=chromenotifier&refresh=true", true);
		xhr.send(null);
	} catch (e) {
		console.log('XHR exception: ' + e);
	}
}

function readerPopup(responseText) {
	var temp = responseText;
	
	//creates the arrays 
	var urls = new Array();
	var titles = new Array();
	var count = new Array();
	var i = 0;
	
	while(temp.indexOf('http://') >= 0) {
		temp = temp.substring(temp.indexOf('http://'));
		urls[i] = temp.substring(0, temp.indexOf('","'));
		titles[i] = temp.substring(7, temp.indexOf('",'));
		count[i] = temp.substring(temp.indexOf('count":')+7, temp.indexOf(',"new'));
		//correctly and efficiently handles the break down of the string
		if(i == 0)
			temp = temp.substring(temp.indexOf('feed/', temp.indexOf('feed/') + 5));
		else if(temp.indexOf('feed/', temp.indexOf('feed/') + 5) >= 0)
			temp = temp.substring(temp.indexOf('feed/'));
		else
			break;

		i++;
	}
	
	document.getElementById('unreadReader').innerHTML = "";
	
	var header = document.createElement('div');
	header.id = 'headerID';
	header.setAttribute("style", "height: 30px; width: 100%; color: #CD2626 !important; border-bottom: 1px dotted black;");
	
	var reader = document.createElement('div');
	reader.id = 'title';
	reader.setAttribute('style', 'font-size: 15px; color: #CD2626; margin: 0px 10px 0px 10px; font-weight: bold;');
	reader.innerHTML = 'Reader';

	var viewAll = document.createElement('div');
	viewAll.id = 'viewAll';
	viewAll.style.float = 'right';
	viewAll.innerHTML = "<a target='_blank' href='https://www.google.com/reader/view/?tab=Xy'>View All</a>";
	
	reader.appendChild(viewAll);
	header.appendChild(reader);
	
	var innerbody = document.createElement('div');
	innerbody.id = 'innerbody';
	innerbody.setAttribute('style', 'background-color: #EEE; max-height: 500px; width: 100%;');
	
	for(var j = 0; j < i; j++) {
		var entryLink = document.createElement('a');
		entryLink.href = 'http://www.google.com/reader/view/?utm_campaign=en&utm_source=en-ha-ww-ww-bk&utm_medium=ha&utm_term=google+RSS+reader#stream/feed/' + urls[j];
		entryLink.id = 'linkId';
		entryLink.target = '_blank';
		entryLink.setAttribute('style', 'text-decoration: none;');
		
		var entry = document.createElement('div');
		entry.id = 'entry';
		entry.setAttribute('style', 'font-size: 14px; color: black; border-bottom: 1px solid #AAA; height: 40px; padding-left: 10px; padding-top: 3px;');
		entry.innerHTML = "<img id='gmailIcon' src='" + chrome.extension.getURL('reader-icon.png') + "' height='30px;' width='30px;' style='float: left;' />" + "&nbsp;&nbsp;&nbsp;&nbsp;" + titles[j] + " : <b>" + count[j] + "</b>";
		
		entryLink.appendChild(entry);
		innerbody.appendChild(entryLink);
	}
	
	document.getElementById('unreadReader').appendChild(header);
	document.getElementById('unreadReader').appendChild(innerbody);
}