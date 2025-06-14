var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*====================/

Really Simple jQuery Tabs v1.0
Michael Jasper
http://www.mikedoesweb.com/tabs/
(c) 2011

http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/


=====================*/
;
(function ($) {
	'use strict';
	$.fn.jqtabs = function (cycle, cycleSpeed) {

	$('.navigation li a').first().css('display', 'block').addClass('current');
	$('.panel').first().css('display', 'block');
		
		var pluginName = "Really Simple jQuery Tabs",
			defaults = {
				cycleSpeed: 5000
			};

		return this.each(function () {
			var all, cycleIterator, numberOfTabs, allTabs, tabIndex, tabToCycle, changeTo;

			all = this;
			cycleIterator = 1;
			numberOfTabs = 0;

			/*  changeTo(tab) Function
			=====================*/
			changeTo = function (tab) {
				if (!$(tab).hasClass("current")) {
					$(".panel", all).hide();
					$($(tab).attr("href")).show(0, function () {
						$(".current", all).removeClass("current");
						$(tab).addClass("current");
					});
				}
			};

			/*  Tab Click
			=====================*/
			$(".navigation li a").click(function () {
				changeTo(this);
				return false;
			});

			/* TODO: Pause on Hover
			=====================
			$(".panel", this).hover(function (){
			alert("hovering");
			});          
			*/

			/*  Initiate Cycle
			=====================*/
			if (cycle) {
				//array of tabs
				allTabs = $(".navigation li a", all);
				numberOfTabs = allTabs.length;

				setInterval(function () {
					tabIndex = (cycleIterator % numberOfTabs);
					tabToCycle = allTabs[tabIndex];
					changeTo(tabToCycle);
					cycleIterator += 1;
				}, cycleSpeed);
			}
		});
	};
}(jQuery));


}
/*
     FILE ARCHIVED ON 01:15:04 Apr 12, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:53:41 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.638
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.009
  esindex: 0.013
  cdx.remote: 25.457
  LoadShardBlock: 99.844 (3)
  PetaboxLoader3.datanode: 143.145 (4)
  load_resource: 1251.482
  PetaboxLoader3.resolve: 1174.873
*/