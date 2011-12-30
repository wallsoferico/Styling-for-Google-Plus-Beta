//Code for retrieving Unread Reader Count adapted from Google Reader Notifier (by Google) and GTools+
function getCUnreadCount() {
	var ccount;

	var xhr = new XMLHttpRequest();
	var abortTimerId = window.setTimeout(function() {
		xhr.abort();
	}, 10000);
		
	function handleSuccess(jsonText) {
		
		window.clearTimeout(abortTimerId);
		
		//finds the total number of calendar events and then sets it
		ccount = jsonText.substring(jsonText.indexOf('totalResults') + 13, jsonText.indexOf('</openSearch'));
		document.getElementById('ccounter').innerHTML = ccount;
		calendarPopup(jsonText, ccount);
	}
			
	try {
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status >= 400) {
					ccount = 0;
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
		
		//obtains the full current date to be used for obtaining events
		var now = new Date();
		var date = new Array();
		date[0] = now.getFullYear();
		date[1] = now.getMonth()+1;
		date[2] = now.getDate();
		date[3] = now.getHours();
		date[4] = now.getMinutes();
		date[5] = now.getSeconds();
		
		//makes sure the dates are properly formatted 
		for(var i = 1; i < date.length; i++) {
			if(date[i] < 10)
				date[i] = "0" + date[i];
		}
		var date1 = date[0] + '-' + date[1] + '-' + date[2];
		var date2 = 'T' + date[3] + ':' + date[4] + ':' + date[5];
		var uri = "https://www.google.com/calendar/feeds/default/private/basic?start-min=" + date1.toString().replace(/,/gi, '-') + date2 + "&start-max=" + date[0] + '-' + date[1] + '-' + (date[2]+1) + "T02:00:00" + '&orderby=starttime&sortorder=ascending';
		xhr.open('GET', uri, true);
		xhr.send(null);
	} catch (e) {
		console.log('XHR exception: ' + e);
		//handleError();
	}
}

function calendarPopup(responseText, ccount) {
	var temp = responseText;
	
	temp = temp.substring(temp.indexOf('</openSearch'));
	
	var eventTitle = new Array();
	var startDay = new Array();
	var startTime = new Array();
	
	for(var j = 0; j < ccount; j++) {
		eventTitle[j] = temp.substring(temp.indexOf('<title')+19, temp.indexOf('</title>')); //finds the title of the Event
		startDay[j] = temp.substring(temp.indexOf('When') + 6, temp.indexOf(', ') + 6); //finds the date of the event
		startTime[j] = temp.substring(temp.indexOf(', ') + 7, temp.indexOf('&amp;nbsp;'));
		//temp substring wasn't shrinking so needed to offset finding the same title over and over
		if(j > 0)
			temp = temp.substring(temp.indexOf('title=', temp.indexOf('title=')+6));
		else
			temp = temp.substring(temp.indexOf('title='));
	}

	document.getElementById('unreadCalendar').innerHTML = ""; //clears the html
	
	//creates a header div for general styling
	var header = document.createElement('div');
	header.id = 'headerID';
	header.setAttribute("style", "height: 30px; width: 100%; color: #CD2626; border-bottom: 1px dotted black;");
	
	//creates a div for the title
	var calendar = document.createElement('div');
	calendar.id = 'title';
	calendar.setAttribute('style', 'font-size: 15px; color: #CD2626; margin: 0px 10px 0px 10px; font-weight: bold;');
	calendar.innerHTML = 'Calendar';

	//creates a div for the view all link
	var viewAll = document.createElement('div');
	viewAll.id = 'viewAll';
	viewAll.style.float = 'right';
	viewAll.innerHTML = "<a target='_blank' href='https://www.google.com/calendar/render?tab=Xc'>View All</a>";
	
	//appends the title and view all to the header
	calendar.appendChild(viewAll);
	header.appendChild(calendar);
	
	//contains the events that are occuring that day
	var innerbody = document.createElement('div');
	innerbody.id = 'innerbody';
	innerbody.setAttribute('style', 'background-color: #EEE; max-height: 500px; width: 100%;');
	
	for(var j = 0; j < ccount; j++) {
		var entryLink = document.createElement('div');
		entryLink.id = 'entry';
		entryLink.setAttribute('style', 'font-size: 14px; color: black; border-bottom: 1px solid #AAA; height: 40px; padding-left: 10px; padding-top: 3px;');
		
		//creates two date objects to be compared for timeUntil
		var date = new Date;
		var eventDate = new Date;
		
		//sets the date for the events to be compared
		eventDate.setMonth(date.getMonth());
		eventDate.setDate(date.getDate());
		eventDate.setFullYear(date.getFullYear());
		
		//if it is just hours else it has minutes too
		if(startTime[j].indexOf(':') < 0) {
			if(startTime[j].indexOf('pm') >= 0 && startTime.indexOf('12') < 0)
				eventDate.setHours(parseInt(startTime[j].substring(0,startTime[j].indexOf('pm')))+12);
			else
				eventDate.setHours(parseInt(startTime[j].substring(0,startTime[j].indexOf('am'))));
		}
		else {
			if(startTime[j].indexOf('pm') >= 0)
				eventDate.setHours(parseInt(startTime[j].substring(0,startTime[j].indexOf(':')))+12);
			else
				eventDate.setHours(parseInt(startTime[j].substring(0,startTime[j].indexOf(':'))));
			eventDate.setMinutes(startTime[j].substr(startTime[j].indexOf(':')+1, 2));
		}
		
		//calculates hours mins and secs from the total milliseconds
		var timeUntil = parseInt(Date.parse(eventDate) - date.getTime());
		var hours = parseInt(timeUntil/1000/60/60);
		var minutes = parseInt((timeUntil - (hours*1000*60*60))/1000/60);
		var secs = parseInt(((timeUntil - (hours*1000*60*60))-minutes*1000*60)/1000);
		
		entryLink.innerHTML = "<img id='gmailIcon' src='" + chrome.extension.getURL('calendar-icon.png') + "' height='30px;' width='30px;' style='float: left;' />" + "&nbsp;&nbsp;&nbsp;&nbsp;" + eventTitle[j] + " starts in <b>" + hours + " hours " + minutes + " mins " + secs + " secs</b>";
		
		innerbody.appendChild(entryLink);
	}
	
	//appends the header and innerbody to the div popup
	document.getElementById('unreadCalendar').appendChild(header);
	document.getElementById('unreadCalendar').appendChild(innerbody);
}