				var tab;
				var db;
				var height;
				var gcount;
				var rcount;
				var READING_LIST_RE_ = new RegExp('user/[\\d]+/state/com\\.google/reading-list');
				
				chrome.extension.sendRequest("ledokaaoodnghhbbeeofdplhihinhbcb", {action: "getLocalStorage"}, function(response) {
					db = response.status;
				
				var name = document.getElementById('gb_119').innerHTML;
				var temp = name.substring(0, name.indexOf('class="gbts"'));
				name = temp + 'class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;"' + ">" + name.substring(name.indexOf("+"));
				var name2 = document.getElementById('gb_119').innerHTML;
				
				document.getElementById('gbz').innerHTML = '<span class="gbtcb"></span><ol class="gbtc">';
				if(db["uname"] == "false") {
					if(window.location.href.indexOf("plus.google.com") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a class="gbzt gbz0l gbp1" id="gb_119" onclick="gbar.logger.il(1,{t:1})" href="https://plus.google.com/?hl=en&amp;tab=wX" >' + name + ' </span></a><div wotsearchtarget="plus.google.com" style="display: inline-block; cursor: pointer; width: 16px; height: 16px;">&nbsp;</div></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a class="gbzt" id="gb_119" onclick="gbar.logger.il(1,{t:119})" href="https://plus.google.com/?hl=en&amp;tab=wX" wotsearchprocessed="true">' + name2 + '</span></a><div wotsearchtarget="plus.google.com" style="display: inline-block; cursor: pointer; width: 16px; height: 16px;">&nbsp;</div></li>';
				}
				if(db["gmail"] == "false") {
					if(window.location.href.indexOf("mail.google.com") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt gbz0l gbp1" id="gb_23" onclick="gbar.logger.il(1,{t:23})" href="https://mail.google.com/mail/?tab=Xm"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Gmail</span></span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt" id="gb_23" onclick="gbar.logger.il(1,{t:23})" href="https://mail.google.com/mail/?tab=Xm"><span class="gbtb2"><span class="gbts">Gmail</span></span></a></li>';
				}
				if(db["cal"] == "false") {
					if(window.location.href.indexOf("www.google.com/calendar") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt gbz0l gbp1" id="gb_24" onclick="gbar.logger.il(1,{t:24})" href="https://www.google.com/calendar?tab=Xc"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Calendar</span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt" id="gb_24" onclick="gbar.logger.il(1,{t:24})" href="https://www.google.com/calendar?tab=Xc"><span class="gbtb2"></span><span class="gbts">Calendar</span></a></li>';
				}
				if(db["docs"] == "false") {
					if(window.location.href.indexOf("docs.google.com") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt gbz0l gbp1" id="gb_25" onclick="gbar.logger.il(1,{t:25})" href="https://docs.google.com/?tab=Xo&amp;authuser=0"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Documents</span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt" id="gb_25" onclick="gbar.logger.il(1,{t:25})" href="https://docs.google.com/?tab=Xo&amp;authuser=0"><span class="gbtb2"></span><span class="gbts">Documents</span></a></li>';
				}
				if(db["photos"] == "false") {
					if(window.location.href.indexOf("picasaweb.google.com") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt gbz0l gbp1" id="gb_31" onclick="gbar.logger.il(1,{t:31})" href="https://picasaweb.google.com/home?tab=Xq"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Photos</span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt" id="gb_31" onclick="gbar.logger.il(1,{t:31})" href="https://picasaweb.google.com/home?tab=Xq"><span class="gbtb2"></span><span class="gbts">Photos</span></a></li>';
				}
				if(db["images"] == "false") {
					if(window.location.href.indexOf("www.google.com/imghp") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt gbz0l gbp1" id="gb_2" href="http://www.google.com/imghp?hl=en&amp;tab=wi" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Images</span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt" id="gb_2" href="http://www.google.com/imghp?hl=en&amp;tab=wi" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts">Images</span></a></li>';
				}
				if(db["videos"] == "false") {
					if(window.location.hostname == "video.google.com")
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt gbz0l gbp1" id="gb_12" href="http://video.google.com/?hl=en&amp;tab=wv" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Videos</span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt" id="gb_12" href="http://video.google.com/?hl=en&amp;tab=wv" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts">Videos</span></a></li>';
				}
				if(db["reader"] == "false") {
					if(window.location.href.indexOf("www.google.com/reader") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a class="gbzt gbz0l gbp1" id="gb_32" onclick="gbar.logger.il(1,{t:32})" href="https://www.google.com/reader/?tab=yy"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Reader</span></a></li>';
					else
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a target="_blank" class="gbzt" id="gb_32" onclick="gbar.logger.il(1,{t:32})" href="https://www.google.com/reader/?tab=Xy"><span class="gbtb2"></span><span class="gbts">Reader</span></a></li>';
				}
				if(db["map"] == "false") {
					if(window.location.hostname == "maps.google.com")
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt gbz0l gbp1" id="gb_8" href="http://maps.google.com/maps?hl=en&amp;tab=wl" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Maps</span></a></li>';
					else
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt" id="gb_8" href="http://maps.google.com/maps?hl=en&amp;tab=wl" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts">Maps</span></a></li>';
				}
				if(db["news"] == "false") {
					if(window.location.hostname == "news.google.com")
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt gbz0l gbp1" id="gb_5" href="http://news.google.com/nwshp?hl=en&amp;tab=wn" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">News</span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt" id="gb_5" href="http://news.google.com/nwshp?hl=en&amp;tab=wn" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts">News</span></a></li>';
				}
				if(db["shopping"] == "false") {
					if(window.location.href.indexOf("http://www.google.com/prdhp") >= 0)
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt gbz0l gbp1" id="gb_6" href="http://www.google.com/prdhp?hl=en&amp;tab=wf" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Shopping</span></a></li>';
					else	
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a onclick="gbar.qs(this)" class="gbzt" id="gb_6" href="http://www.google.com/prdhp?hl=en&amp;tab=wf" wotsearchprocessed="true"><span class="gbtb2"></span><span class="gbts">Shopping</span></a></li>';
				}
				if(db["web"] == "false") {
					if(window.location.href.indexOf("www.google.com/reader") < 0 && window.location.href.indexOf("mail.google.com") < 0 && window.location.href.indexOf("www.google.com/calendar") < 0 && window.location.href.indexOf("www.google.com/imghp") < 0 && window.location.href.indexOf("www.google.com/prdhp") < 0 && window.location.hostname == "www.google.com")
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a class="gbzt gbz0l gbp1" id="gb_1" onclick="gbar.logger.il(1,{t:1})" href="http://www.google.com/webhp?hl=en&amp;tab=ww"><span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Web</span></a></li>';
					else
						document.getElementById('gbz').innerHTML += '<li class="gbt"><a class="gbzt" id="gb_1" onclick="gbar.logger.il(1,{t:1})" href="http://www.google.com/webhp?hl=en&amp;tab=ww"><span class="gbtb2"></span><span class="gbts">Web</span></a></li>';
				}
				if(db["more"] == "false") 
					document.getElementById('gbz').innerHTML += '<li class="gbt"><a id="gbztm" class="gbgt" href="http://www.google.com/intl/en/options/" onclick="gbar.tg(event,this)" aria-haspopup="true" aria-owns="gbd" wotsearchprocessed="true"><span class="gbtb2"></span><span id="gbztms" class="gbts gbtsa"><span id="gbztms1">more</span><span class="gbma"></span></span></a><div class="gbm" id="gbd" aria-owner="gbztm"><div class="gbmc"><ol class="gbmcc"><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_51" href="http://translate.google.com/?hl=en&amp;tab=wT" wotsearchprocessed="true">Translate</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_10" href="http://books.google.com/bkshp?hl=en&amp;tab=wp" wotsearchprocessed="true">Books</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_27" href="http://www.google.com/finance?hl=en&amp;tab=we" wotsearchprocessed="true">Finance</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_9" href="http://scholar.google.com/schhp?hl=en&amp;tab=ws" wotsearchprocessed="true">Scholar</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_13" href="http://blogsearch.google.com/?hl=en&amp;tab=wb" wotsearchprocessed="true">Blogs</a></li><li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_36" href="http://www.youtube.com/?hl=en&amp;tab=w1" wotsearchprocessed="true">YouTube</a><div wotsearchtarget="youtube.com" style="display: inline-block; cursor: pointer; width: 16px; height: 16px;">&nbsp;</div></li><li class="gbmtc"><a class="gbmt" id="gb_38" onclick="gbar.logger.il(1,{t:38})" href="http://sites.google.com/?hl=en&amp;tab=w3" wotsearchprocessed="true">Sites</a></li><li class="gbmtc"><a onclick="gbar.qs(this)" class="gbmt" id="gb_3" href="http://groups.google.com/grphp?hl=en&amp;tab=wg" wotsearchprocessed="true">Groups</a></li><li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbmtc"><a class="gbmt" onclick="gbar.logger.il(1,{t:66})" href="http://www.google.com/intl/en/options/" wotsearchprocessed="true">even more >></a></li></ol></div></div></li>';
				
				document.getElementById('gbz').innerHTML += '</ol>';
				
				var css = "";
				if(db["showRCount"] == "true") {
					if(window.location.href.indexOf("www.google.com/reader") >= 0)
						document.getElementById('gb_32').innerHTML = '<span class="gbtb2"></span><span class="gbts" style="border-top: 3px solid #DD4B39; margin-top: -3px !important;">Reader <span class="count" id="rcounter" style="background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;" ></span></span>';	
					else	
						document.getElementById('gb_32').innerHTML = "<span class='gbtb2'></span><span class='gbts'>Reader <span class='count' id='rcounter' style='background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;' ></span></span>";	
					getRUnreadCount();
				}
				if(db["showGCount"] == "true") {
					document.getElementById('gb_23').innerHTML = "<span class='gbtb2'><span class='gbts'>Gmail <span class='count' id='gcounter' style='background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;' ></span></span></span>";
					getGUnreadCount();
				}
				
				css += "#gbz {z-index: auto !important;} ";
				//--------------------------- Set Nav Background Color -----------------------------------
				
				if(db["anavbgColor"] == "true")
					css += "#gbx3, #gbx4 {background-color: " + db["navbgColor"] + " !important;} ";
				
				//--------------------------- Set Text Color for Nav Bar ---------------------------------
				
				if(db["anavtColor"] == "true")
					css += ".gbts {color: " + db["navtColor"] + " !important;} ";
				
				if(window.location.hostname == "plus.google.com") {				
				if(db["custTheme"] == "true" || db["custWideTheme"] == "true") {
					css += "body {background-color:#DDD !important;} ";//body of the home page
					
					if(db["custWideTheme"] == "true") 
						css += ".c-r-V.c-i-r-V {border-radius: 8px !important; padding: 20px 0px 0px 0px; background-color: #DDD; width: 80% !important; margin: 0 auto;} "; //content of the home page
					else	
						css += ".c-r-V.c-i-r-V {border-radius: 8px !important; padding: 20px 0px 0px 0px; background-color: #DDD; margin: 0 auto;} "; //content of the home page
					
					if(db["float"] == "tslBar" || db["float"] == "slBar" || db["float"] == "allBar")  {
						if(db["custWideTheme"] == "true") {
							css += ".c-r-P-V.c-r-P-V-wk-Eb {background-color:white; border-radius: 8px !important; box-shadow: 3px 2px 5px 3px #888 !important; width:70%% !important; padding-left: 10px !important; margin-left: 130px !important; margin-bottom: 10px; margin-right: auto; border: 0px solid transparent !important;} "; //feed outer div on home page (contentPane)
							css += ".c-i-r-Qa-V {margin-left: -70px;} ";
						}
						else {
							css += ".c-r-P-V.c-r-P-V-wk-Eb {background-color:white; border-radius: 8px !important; box-shadow: 3px 2px 5px 3px #888 !important; width:56% !important; padding-left: 10px !important; margin-left: 180px !important; margin-bottom: 10px; margin-right: auto; border: 0px solid transparent !important;} "; //feed outer div on home page (contentPane)
							css += ".c-i-r-Qa-V {margin-left: -20px;} ";
						}
					}
					else {
						if(db["custWideTheme"] == "true") 
							css += ".c-r-P-V.c-r-P-V-wk-Eb {background-color:white; border-radius: 8px !important; box-shadow: 3px 2px 5px 3px #888 !important; width:70%% !important; padding-left: 10px !important; margin-left: 10px !important; margin-bottom: 10px; margin-right: auto; border: 0px solid transparent !important;} "; //feed outer div on home page (contentPane)
						
						else 
							css += ".c-r-P-V.c-r-P-V-wk-Eb {background-color:white; border-radius: 8px !important; box-shadow: 3px 2px 5px 3px #888 !important; width:56%; padding-left: 10px; margin-left: 10px !important; margin-bottom: 10px; border: 0px solid transparent !important;} "; //feed outer div on home page (contentPane)
							
					}
					
					css += ".c-ge-bd {background-color:white; border-radius: 8px !important; margin-bottom: 10px !important; } "; //right column inner div home page
					css += ".c-i-r-Qa-V {background-color:white; border-radius: 8px !important; box-shadow: 3px 2px 5px 3px #888 !important; min-width: 170px !important; padding-left: 5px !important; max-width: 190px !important;} "; //left column home page
					css += ".c-cH-V.a-l-k {background-color: white; border-radius: 8px !important; box-shadow: 3px 2px 5px 3px #888 !important; margin: 0px -149px 0px 12px; padding-right: 20px !important; min-width: 176px;} ";//right column outer div home page
					css += ".kh.iA { width: 95% !important;} "; 
					css += ".f-Qb  {width: 92%; } "; //share text box
					css += ".Ve.jn { border-radius: 8px; margin-top: 20px !important; } "; //actual feeds (innermost div)
					//css += ".Ve.jn {width: 95% !important; padding-left: 10px !important; } "; //feeds outer div (for width)
					css += ".gi.xi {border-left: 1px solid #DDD !important;} "; //focused post left line color
					//css += ".gi.Sy, .Xy {width: 100%} ";
					css += ".c-r-C-Eb-jc {background-color: transparent !important; }"; //under the content home page
					
					//profile page
					css += ".vcard {margin-bottom: 10px;} .g-yl.oK, .g-Em.jD {border-radius: 8px; box-shadow: 3px 3px 10px 6px #888 !important;} ";
					css += ".B-J-pc-ja, .c-Z-Ra-L-S {border-radius: 8px !important; box-shadow: 3px 3px 10px 3px #888 !important; } "; //profile picture
					css += ".g-Em.jD {background-color: white; border-radius: 8px; margin-left: -10px; padding-right: 16px; padding-left: 16px;} .g-yl.oK {margin-left: 241px !important;}"; //left column then outer right column
					//css += ".c-r-P-V.c-r-P-V-Le-Eb {margin: 0 auto; } "; //centers the two columns in the content pane
					css += ".c-r-P-V.c-r-P-V-Le-Eb {background-color: #DDD;} ";
					
					//circles page
					css += ".c-r-P-V.c-r-P-V-Sd-Cb {background-color: #DDD;} "; //contentPane
					css += ".oz-sg-people { margin: 10px 20px 10px 20px; border-radius: 8px; padding-top: 10px; box-shadow: 3px 3px 10px 6px #888;} ";
				
					//Notifications page
					if(window.location.href!="https://plus.google.com/notifications/all")
						css += ".a-o-I-R.a-o-I-R-ws-Yb {margin-left: 20px; background-color: white; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; width: 70%; margin-bottom: 10px;} "; //notifications outer div
					else
						css += ".a-o-I-R.a-o-I-R-ws-Yb {margin-left: 300px; background-color: white; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; width: 70%; margin-bottom: 10px;} "; //notifications outer div
					css += ".Cy {width: 90%; margin: 0 auto; } .fi.By {padding-top: 20px !important; padding-bottom: 20px !important; width: 100%;} "; //inner notifications div, inner notifications outer div, inner notifications inner div
					css += ".to.ep { padding-bottom: 10px; } "; //inner post div
					css += ".wq.ps {border-radius: 8px; box-shadow: 3px 3px 10px 3px #888; margin-bottom:10px; margin-top:10px;} "; //outer post div
				
					//photos pages
					css += ".gs.CJ {margin: 20px 20px 10px 20px; box-shadow: 2px 3px 10px 6px #888 !important; border-radius: 8px; padding: 0px 20px 0px 20px !important;} .a-p-M.ni-M { padding-top: 10px; } "; //First one is left column for Photos from your circles
                    css += ".BJ {border-radius: 8px; padding-top: 10px; background-color: white; min-width: 110%; width: " + db["width"] + "px !important; margin-bottom: 10px; padding-bottom: 20px; box-shadow: 2px 3px 10px 6px #888 !important; margin-left: 10px;} "; //Photos from your circles photo outer div
                    css += ".FF {margin-right: 84px !important; margin-top: 30px; } .Et, .ds {margin-left:25px;} "; // .a-g-sa-Go {top: 10px !important; margin-right: 10px; box-shadow: 2px 3px 10px 4px #888} "; //Upload new photos Button
                    css += ".ji.a-o-I.od-I {background-color: #DDD; } .Ni.a-m-I.de-I {background-color: #DDD !important; padding-top: 0px !important; padding-left: 210px !important; } " //right below content pane - background color stuff
                    css += ".ms, .ru {padding-left: 25px; padding-right:0px;} .is {display: none;} "; //Title, pictures outer div, and right column of photos from your circles
                    css += ".F-P-dd-ea, .EC, .Hy, .aq.Yp {border-radius: 8px;} "; //div containing pictures on Photos from Circles page
                    css += ".of.Cg-v {border-bottom-right-radius: 8px; border-bottom-left-radius: 8px} "; //"by Name" caption of pictures
					css += ".Di {padding-left: 200px !important;} ";
					css += ".F-P-bg { width: 100% !important;} "; //Photos outer div width
					css += ".ph {background-color: #DDD} ";
                    
					if(db["aphccColor"] == "true")
						css += ".P9, .zl, .xl { background-color: " + db["phccColor"] + "; padding: 10px 0px 10px 0px !important; margin: 0px 20px 10px 280px; box-shadow: 3px 3px 10px 6px #888; border-radius: 8px; } "; //outer div of right side on Photos from your Phone Page, Photos of You Page, and Your Albums Page
					else
						css += ".P9, .zl, .xl { background-color: white; padding: 10px 0px 10px 0px !important; margin: 0px 20px 10px 280px; box-shadow: 3px 3px 10px 6px #888; border-radius: 8px; } "; //outer div of right side on Photos from your Phone Page, Photos of You Page, and Your Albums Page
					css += " .Q9, .tu, .xs, .vs {left: 0px !important; padding-left: 25px !important; width: 98% !important;} "; //photos outer div on the Photos from your Phone page, Photos of You Page
					css += ".S9, .bu, .Wr, .Ur {padding-left: 25px; } "; //Photos from your Phone desctiption
					if(db["aphccColor"] == "true")
						css += ".O9 {background-color: " + db["phccColor"] + "; margin-right: 50px !important; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; } ";
					else
						css += ".O9 {background-color: white; margin-right: 50px !important; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; } ";
					css += ".eca {background-color: white; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; } ";
					
					//Games Page
					css += ".gV {background-color: white; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; padding-left:25px; margin-left: 20px; margin-bottom: 10px;} "; //Game side
					css += ".S3 {background-color: white; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; margin-left: -45px; padding-bottom: 10px;}" ; //left column
					css += ".xI, .O3 {background-color: white; border-radius: 8px; box-shadow: 3px 3px 10px 6px #888; } "; //When Playing Game Top and bottom
					css += ".xI {padding-top: 10px} ";
					//css += ".V4, .Q7 {margin: 0 auto; } "; //center the two columns
					css += ".BI, .a-j.hk.ir, .gi.xi {border: 0px !important;} "; //removes border from games comments
					css += ".CI {border-style: none;} ";
				
				}
				
				//--------------------------- Set Background Colors --------------------------------------
				if(db["abgColor"] == "true")
					css += "body {background-color:" + db["bgColor"] + ";} ";
				if(db["alcColor"] == "true")
					css += ".c-i-r-Qa-V {background-color:" + db["lcColor"] + ";} "; //left column
				else
					css += ".c-i-r-Qa-V {background-color: white;} "
				
				if(db["arcColor"] == "true") {
					if(db["float"] == "noFloat" || db["float"] == "topBar")
						css += ".c-cH-V.a-l-k {background-color:" + db["rcColor"] + " !important;} .c-ge-bd {margin: 16px 0px 10px 10px !important;} "; //right column then right inner column
					else
						css += ".c-cH-V.a-l-k {background-color:" + db["rcColor"] + " !important; padding-right: 10px !important;} ";
				}
				
				css += ".Fv, .ze.sj, .c-r-V.c-i-r-V {background-color: transparent; border: 0px !important; } ";
				
				if(db["acColor"] == "true") 
					css += ".a-o-I-R-jk-Yb {background-color: " + db["cColor"] + " !important;} .Zi, .jr {background-color: transparent !important; border: 0px !important;} ";
				
				css += ".Fv:hover { background-color: transparent !important; } .a-m-K-S-Rh-wb { border: 0px !important; } .g-Em.jD {background-color: white; } ";
				css += ".Ft, .Ft:hover {background-color: transparent !important; } .c-ge-bd {background-color: transparent !important;} ";
				
				//--------------------------- Background Colors for Profile Page -------------------------
				
				if(db["aplcColor"] == "true")
					css += ".g-Em.jD {background-color: " + db["plcColor"] + " !important;} "; //left column
				if(db["aprcColor"] == "true")
					css += ".g-yl.oK, .a-ha-ga.a-ha-ga-sa {background-color: " + db["prcColor"] + " !important; border: 1px solid " + db["prcColor"] + "; } "; //right column and nav bar
				
				//css += ".a-b-da {background-color: " + db["bgColor"] + ";} "; //bg of content pane
				css += ".c-r-P-V.c-r-P-V-Le-Eb {background-color: transparent;} "; //bg of content pane
				
				//--------------------------- Set Text Colors for Profile Page ---------------------------
				
				if(db["aplctColor"] == "true")
					css += ".Pv.a-l-k, .c-G-j.Jo.g-mH, .Pv.rla, .c-G-j.Jo.g-oH, .g-IX.c-G-j, .e-b-ca.e-b-v {color: " + db["plctColor"] + ";} "; 
					//In Name Circle, show all, have name in circle, show all, change who is visible, send email
				if(db["aprcTTColor"] == "true")
					css += ".fn, .g-Gd.mD.pb {color: " + db["prcTTColor"] + "; } "; //Right Column Title Text
				if(db["aprcntColor"] == "true")
					css += ".a-ha-ea-fv {color: " + db["prcntColor"] + " !important; } "; // Right Column Nav Color
				
				//--------------------------- Background Color For Photos Page ---------------------------
				
				if(db["aphlcColor"] == "true")
					css += ".Xr {background-color: " + db["phlcColor"] + "; border: 0px solid transparent !important;} ";
				if(db["aphccColor"] == "true") {
					if(db["custTheme"] == "true")
						css += ".AG, .yl, .F-P-bg, .Zr {background-color: " + db["phccColor"] + "; padding-bottom: 20px;} ";
					else	
						css += ".AG, .yl, .F-P-bg, .Zr, .ji.a-o-I.od-I {background-color: " + db["phccColor"] + "; padding-bottom: 20px;} ";
				}		
				
				//--------------------------- Set Text Colors for Photos Page ----------------------------
				
				if(db["aphtColor"] == "true")
					css += ".Ht, .pm, .om, .Gt, .ds, .qB, .IG, .HG, .ica, .xs, .a-v-fb-Y, .Zh, .oi, .c-m-l.aka, .aB, .Eb.Jh {color: " + db["phtColor"] + ";} ";
				if(db["aphhovColor"] == "true")
					css += ".a-ob-j.Ht:hover, .a-ob-j.Gt:hover, .a-ob-j.om:hover, .a-ob-j.pm:hover, .a-ob-j.Am:hover {background-color: " + db["phhovColor"] + ";} ";
				
				//--------------------------- Background Color for Circles Page --------------------------
				
				if(db["acbgColor"] == "true")
					css += ".oz-sg-people, .mP.JY, .PP.fF {background-color: " + db["cbgColor"] + "; } ";
				
				//--------------------------- Set Text Color for Circles Page
				
				if(db["actColor"] == "true")
					css += ".ic-X, .ic, .QP, .a-l-k.Zd-ea, .a-l-k.a-M-b-v, .a-l-k.Zd-ea, .jT {color: " + db["ctColor"] + " !important; } ";
				
				//--------------------------- Background Color for Games Page ----------------------------
				
				if(db["agbgColor"] == "true") {
					css += ".c-r-P-V.c-r-P-V-Sd-Cb, .md.gi.xi.PA, .a-j.hk.ir, .O3 {background-color: transparent; } ";
					css += ".c-r-C-V.c-C.c-r-C-Eb-jc, .Dq:hover, .G3, .S3, .gV, .O3 {background-color: " + db["gbgColor"] + "; } ";
					css += ".G3 {border: 0px solid #000;} ";
				}
				css += ".Mca {margin: 0 auto;} ";
				
				//--------------------------- Set Text Colors for Games Page -----------------------------
				
				if(db["agtColor"] == "true")
					css += ".FS.a-ob-j.a-f-j-Ja, .KF, .RF, .ES, .Ss.FF, .Q4.a-f-j-J, .b-j.Uk.jr, .b-n-l.g-d.g-d-Q.uz {color: " + db["gtColor"] + ";} ";
				
				//--------------------------- Background Color for Google+ nav bar -----------------------
				
				if(db["agpnavColor"] == "true")
					css += ".a-fa-M.c-cb-V {background-color: " + db["gpnavColor"] + " ;} ";
				
				//--------------------------- Set Text Colors --------------------------------------------
				
				if(db["alcTTColor"] == "true") {
					css += ".a-ud-sr.b-n-l, .a-ob-j-ia, .a-ob-j.a-ob-sma, a[href='/welcome'] {color:" + db["lcTTColor"] + ";} "; //Profile Name, Stream, Sparks, Welcome
				}
				
				if(db["alcTColor"] == "true") {
					css += ".a-ob-oh-j.a-f-ob-oh-j {color:" + db["lcTColor"] + ";} "; //Streams
					css += ".a-f-ob-Qha.a-ob-dR {color:" + db["lcTColor"] + ";} a[href='/notifications/all'] {color:" + db["lcTColor"] + ";} "; //incoming and notifications
					css += ".a-ob-j.a-ob-mJ {color:" + db["lcTColor"] + ";} "; //Sparks
					//css += ".talk_iframe {color:" + db["lcTColor"] + ";} .me_entry_status_static_text{color:" + db["lcTColor"] + ";} .roster_row_name{color:" + db["lcTColor"] + ";} ";
				}
				
				//sets the right column title text color
				if(db["arcTTColor"] == "true") {
					css += ".GB.b-n-l, .BO.qja, .xZ, .c-ge-Hl-mc-Y {color:" + db["rcTTColor"] + "!important;} "; //In Your Circles, Suggestions, 
				}
				
				//sets all the text colors in the right Column
				if(db["arcTColor"] == "true") {
					css += ".a-Fc-Ap.S8.b-n-l, .a-Q-j.mL.oL, .q-yb-gb-d-la-f, .g-d-ta.D5.Eaa, .c-ge-Hl-E, a[href*='/circles/find'] {color:" + db["rcTColor"] + ";} ";
					//In circs, Suggestions Name, Suggestions "Add to circles", Invite Friends Button, Suggestions Show all
					//.a-Y-k:not(.a-c-k-eb) {color:" + db["rcTColor"] + ";} ";
				}
				
				//Sets the center column link colors
				if(db["accLColor"] == "true") {
					css += "a {color:" + db["ccLColor"] + ";} .F-y-Ha-la, .F-y-me-Ib {color:" + db["ccLColor"] + " !important;} ";
				}
				
				//sets the center column Comment colors
				if(db["accCColor"] == "true") {
					css += ".fk, .Ig, .yw, .b-j.Iw, .cx, .b-n-l.Ce, .Yz.Zw, .b-j.Wo, .Hm, .proflink, .Fl , .b-j.de, .b-j.Fi {color:" + db["ccCColor"] + ";} ";
					//last three are Comment Times, Comment Link, and Share Link
					//css += ".a-b-f-i-gc-cf-Xb-h {color:" + db["ccCColor"] + ";} .a-b-f-i-je-oa-Vb {color:" + db["ccCColor"] + ";} .a-f-i-W-Zb {color:" + db["ccCColor"] + ";} ";
					//css += ".d-k.wf {color:" + db["ccCColor"] + ";} .d-k.cl {color:" + db["ccCColor"] + ";} ";
				}
				
				//sets the center column title colors (user name, date/time published, public/limited)
				if(db["accTTColor"] == "true") {
					css += ".Qn.Ig.lh, .a-Q-j.a-f-j-Ja.Fl, .b-j.Ii.cp.Gl, .ot-anchor.Ge, .vo {color:" + db["ccTTColor"] + ";} "; //User Name, Time, Privacy, Mobile, Stream
					//css += ".d-k.gl.rr.Cp {color:" + db["ccTTColor"] + ";} .yq.Ii.wj {color:" + db["ccTTColor"] + ";} ";
				}
				
				//sets the center column text color (what users write)
				if(db["accTColor"] == "true") {
					css += ".Dh {color:" + db["ccTColor"] + ";} ";
				}
				
				//--------------------------- Top Nav Bar ------------------------------------------------
				
				if(db["uname"] == "true") {
					css += "#gb_119 {display: none !important; } ";
				}
				if(db["gmail"] == "true") {
					css += "#gb_23 {display:none !important; } ";
				}
				if(db["cal"] == "true") {
					css += "#gb_24 {display:none !important; } ";
				}
				if(db["docs"] == "true") {
					css += "#gb_25 {display:none !important; } ";
				}
				if(db["photos"] == "true") {
					css += "#gb_31 {display:none !important; } ";
				}
				if(db["reader"] == "true") {
					css += "#gb_32 {display:none !important; } ";
				}
				if(db["web"] == "true") {
					css += "#gb_1 {display:none !important; } ";
				}
				if(db["more"] == "true") {
					css += "#gbztm {display:none !important; } ";
				}
				if(db["videos"] == "true") {
					css += "#gb_12 {display: none !important;} ";
				}
				if(db["images"] == "true") {
					css += "#gb_2 {display: none !important;} ";
				}
				if(db["maps"] == "true") {
					css += "#gb_8 {display: none !important;} ";
				}
				if(db["news"] == "true") {
					css += "#gb_5 {display: none !important;} ";
				}
				if(db["shopping"] == "true") {
					css += "#gb_6 {display: none !important;} ";
				}
				
				//--------------------------- Left Column --------------------------------------------------
				
				if(db["showRCount"] == "true") {
					var reader = document.getElementById('gb_32');
					reader.innerHTML = "<span class='gbtb2'><span class='gbts'>Reader <span class='count' id='rcounter' style='background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;' >" + rcount + " </span></span></span>";
				}
				if(db["showGCount"] == "true") {
					var gmail = document.getElementById('gb_23');
					gmail.innerHTML = "<span class='gbtb2'><span class='gbts'>Gmail <span class='count' id='gcounter' style='background: #CD2626; position: relative; top: -1px; padding: 2px 5px 2px; font-size: 12px; font-weight: bold; border-radius: 4px; color: white;' >" + gcount + " </span></span></span>";
				}
				
				if(db["pPic"] == "true" && db["pName"] == "true") {
					css += ".c-i-Cc-C.c-Cc-C {display:none !important;} ";
				}
				if(db["pPic"] == "true") {
					css += ".c-i-Cc-Dk.c-Cc-Dk {display: none !important; } ";
				}
				if(db["pName"] == "true") {
					css += ".c-Cc-Dr.a-l-k { display: none !important; } ";
				}
				
				if(db["welcome"] == "true") {
					css += "a[href*='/welcome']  {display: none !important;} ";
				}
				if(db["stream"] == "true") {
					css += ".NksfUe { display: none !important; } .g2Lc3b.SSGeYb { display: none !important; } ";
					db["incoming"] = "true";
					db["notif"] = "true";
				}
				if(db["incoming"] == "true") {
					css += ".eYNw4c.qQWXrb {display: none !important; } "; //for some reason will not work with a[href*='...'] so need to use class name
				}
				if(db["notif"] == "true") {
					css += "a[href*='/notifications/all'] {display: none !important; } ";
				}
				if(db["sparks"] == "true") {
					css += ".D09n1e, a[href*='/sparks']	 {display: none !important;} "; //Sparks outer div
				}
				if(db["chat"] == "true") {
					css += ".c-i-Qa-Fb-Zp.c-Qa-Fb { display: none !important;} ";
				}
				
				//--------------------------- Rght Column --------------------------------------------------
				
				if(db["inCircs"] == "true") {
					css += ".c-Ob-DA.a-l-k { display: none !important; } ";
				}
				if(db["suggest"] == "true") {
					css += ".Lia { display: none !important; } ";
				}
				if(db["hText"] == "true") {
					css += ".c-ge-Hl-E { display: none !important; } ";
				}
				if(db["hTitle"] == "true") {
					if(db["hButton"] == "false" && db["hText"] == "true")
						css += ".c-ge-Hl-mc-Y { display: none !important; } .a-yf-mm.d g-d-V {margin-top:20px;} ";
					if(db["hText"] == "false")
						css += ".c-ge-Hl-mc-Y { display: none !important; } .c-ge-Hl-E {margin-top:20px;} ";
					else
						css += ".c-ge-Hl-mc-Y { display: none !important; } "
				}
				if(db["hButton"] == "true") {
					css += ".c-i-ge-Hl.c-ge-Hl-b { display: none !important; } ";
				}
				if(db["invites"] == "true") {
					if(db["hTitle"] == "false") {
						css += ".c-ge-Hl-mc-Y {margin-bottom: 20px;} ";
					}
					else if(db["hText"] == "false") {
						css += ".c-ge-Hl-E {margin-bottom: 20px;} ";
					}
					else if(db["hButton"] == "false") {
						css += ".a-yf-mm.d g-d-V {margin-bottom: 20px;} ";
					}
					
					if(db["mobile"] == "false") {
						css += ".IU {padding-top: 20px;} ";
					}
					
					css += ".EZ { display: none !important; } .Ela { display: none !important; } .Dla {display:none !important;} ";
				}
				if(db["mobile"] == "true") {
					if(db["hTitle"] == "false") {
						css += ".c-ge-Hl-mc-Y {margin-bottom: 20px;} ";
					}
					else if(db["hText"] == "false") {
						css += ".c-ge-Hl-E {margin-bottom: 20px;} ";
					}
					else if(db["hButton"] == "false") {
						css += ".c-i-ge-Hl.c-ge-Hl-b {margin-bottom: 20px;} ";
					}
					
					if(db["invites"] == "false") {
						css += ".o9 {padding-bottom: 20px !important;} ";
					}
					
					css += ".Vp {display: none;} .fL{ display: none !important; } ";
				} //added back
				
				//--------------------------- Scroll and Float ---------------------------------------------
				
				if(db["scroll"] == "true") {
					css += "::-webkit-scrollbar {width:3px; height:3px;} ";
					css += "::-webkit-scrollbar-thumb:vertical {width:3px; background-color:grey; -webkit-border-radius:8px;} ";
				}
				if(db["scroll2"] == "true") {
					css += "::-webkit-scrollbar {width:0px !important;} ";
				}
				
				/*if(db["custTheme"] == "false")
					if(db["float"] == "topBar" || db["float"] == "noFloat" || db["float"] == "tslBar" || db["float"] == "slBar")
						css += ".c-cH-V.a-l-k {padding-right: 0px !important;} ";
				*/
				if(db["float"] == "topBar") {
					css += "#gb {position: fixed; top:0px !important; left:0px !important; width: 100%;} ";
					css += ".c-cb-V {position: fixed !important; height:45px !important; z-index:100; padding-bottom:10px;} ";
					css += "#content {padding-top: 75px !important;} ";
				}
				
				else if(db["float"] == "slBar") {
					css += ".c-i-r-Qa-V {position: fixed !important; overflow:auto; height: " + db["height2"] + "px !important;}  ";
					css += ".a-o-I-R-jk-Yb {padding-left: 10px; margin-left: 180px; } ";
				}
				
				else if(db["float"] == "srBar") {
					css += ".c-cH-V.a-l-k {background-color: white; padding-right: 20px; position: fixed !important; overflow:auto; height: " + db["height2"] + "px !important; padding-top 10px !important; padding-bottom: 10px !important; } ";
				}
				
				else if(db["float"] == "tslBar") {
					css += "#gb {position: fixed !important; top:0px !important; left:0px !important; width: 100%;} ";
					css += ".c-cb-V {position: fixed !important; height:45px; z-index:100; padding-bottom:10px;} ";
					css += "#content {padding-top: 75px !important;} ";
					css += ".c-i-r-Qa-V {position: fixed !important; overflow:auto; height: " + db["height2"] + "px !important; padding-top 10px !important; padding-bottom: 10px !important; } ";
					css += ".a-o-I-R-jk-Yb {padding-left: 10px; margin-left: 180px; } ";
				}
				
				else if(db["float"] == "tsrBar") {
					css += "#gb {position: fixed !important; top:0px !important; left:0px !important; width: 100%;} ";
					css += ".c-cb-V {position: fixed !important; height:45px; z-index:100; padding-bottom:10px;} ";
					css += "#content {padding-top: 75px !important;} ";
					css += ".c-cH-V.a-l-k {background-color: white; padding-right: 20px; position: fixed !important; overflow:auto; height: " + db["height2"] + "px !important; padding-top 10px !important; padding-bottom: 10px !important; } ";
				}
				
				else if(db["float"] == "allBar") {
					css += "#gb {position: fixed !important; top:0px !important; left:0px !important; width: 100%;} ";
					css += ".c-cb-V {position: fixed !important; height:45px; z-index:100; padding-bottom:10px;} ";
					css += "#content {padding-top: 75px !important;} ";
					css += ".c-cH-V.a-l-k {background-color: white; padding-right: 20px; position: fixed !important; overflow:auto; padding-top 10px !important; width:198px; height: " + db["height"] + "px !important; } ";
					css += ".c-i-r-Qa-V {position: fixed !important; overflow:auto; height: " + db["height"] + "px !important; padding-top 10px !important;} ";
					css += ".a-o-I-R-jk-Yb {padding-left: 10px; margin-left: 180px; } ";
				}
				
				
				//--------------------------- Other --------------------------------------------------------
				
				if(db["feedback"] == "true") {
					css += ".c-zh-Wf-b {display:none !important;} ";
					
				}
				
				}
				console.log("showRCount: " + db["showRCount"]);
				if(db["showRCount"] == "true") {
					console.log("showRCount: " + db["showRCount"]);
					setInterval(getRUnreadCount, 2000);
				}
				if(db["showGCount"] == "true") {
					setInterval(getGUnreadCount, 2000);
				}
				//--------------------------- Create and Inject CSS Style ----------------------------------
				var heads = document.getElementsByTagName("head");
				if (heads.length > 0) {
					var node = document.createElement("style");
					node.type = "text/css";
					node.appendChild(document.createTextNode(css));
					heads[0].appendChild(node);
				}
				
				});
			
			
			//Code for retrieving Unread Gmail/Reader Count adapted from Google Reader Notifier (by Google) and GTools+
			function getRUnreadCount() {
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
						console.log(stream.count);
						return;
					}
				}

				// Fallthrough: we couldn't find the reading list unread count, assume it's
				// 0 (items with a 0 unread count are not output)
				rcount = 0;
				document.getElementById('rcounter').innerHTML = rcount;
			}
			
			try {
				console.log('request..');
				xhr.onreadystatechange = function() {
					console.log('readystate: ' + xhr.readyState);
					if (xhr.readyState == 4) {
						if (xhr.status >= 400) {
							console.log('Error response code: ' + xhr.status + '/' + xhr.statusText);
							rcount = 0;
						} else if (xhr.responseText) {
							console.log('responseText: ' + xhr.responseText.substring(0, 200) + '...');
							handleSuccess(xhr.responseText);
						} else {
							console.log('No responseText!');
						}
					}
				}

				xhr.onerror = function(error) {
					console.log('error');
					console.log(error);
					//handleError();
				}

				xhr.open('GET', "http://www.google.com/reader/api/0/unread-count?output=json&client=chromenotifier&refresh=true", true);
				xhr.send(null);
			} catch (e) {
				console.log('XHR exception: ' + e);
				//handleError();
			}
			}
			
			function getGUnreadCount() {
			var xhr = new XMLHttpRequest();
			var abortTimerId = window.setTimeout(function() {
				xhr.abort();
			}, 10000);
				
			function handleSuccess(jsonText) {
				window.clearTimeout(abortTimerId);
				
				gcount = jsonText.substring(jsonText.indexOf("<fullcount>") + 11, jsonText.indexOf("</fullcount>"));
				console.log(gcount);
				document.getElementById('gcounter').innerHTML = gcount;
			}
			
			try {
				console.log('request..');
				xhr.onreadystatechange = function() {
					console.log('readystate: ' + xhr.readyState);
					if (xhr.readyState == 4) {
						if (xhr.status >= 400) {
							console.log('Error response code: ' + xhr.status + '/' + xhr.statusText);
							gcount = 0;
						} else if (xhr.responseText) {
							console.log('responseText: ' + xhr.responseText.substring(0, 200) + '...');
							handleSuccess(xhr.responseText);
						} else {
							console.log('No responseText!');
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