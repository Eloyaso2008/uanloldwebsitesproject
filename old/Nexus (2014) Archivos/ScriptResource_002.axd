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

/////////////////////////////////////////////////////////////////////////////
Sys.Timer = function() {
Sys.Timer.initializeBase(this);this._interval = 1000;this._enabled = false;this._timer = null;}
Sys.Timer.prototype = {
get_interval: function() {
return this._interval;},
set_interval: function(value) {
if (this._interval !== value) {
this._interval = value;this.raisePropertyChanged('interval');if (!this.get_isUpdating() && (this._timer !== null)) {
this._stopTimer();this._startTimer();}
}
},
get_enabled: function() {
return this._enabled;},
set_enabled: function(value) {
if (value !== this.get_enabled()) {
this._enabled = value;this.raisePropertyChanged('enabled');if (!this.get_isUpdating()) {
if (value) {
this._startTimer();}
else {
this._stopTimer();}
}
}
},
add_tick: function(handler) {
this.get_events().addHandler("tick", handler);},
remove_tick: function(handler) {
this.get_events().removeHandler("tick", handler);},
dispose: function() {
this.set_enabled(false);this._stopTimer();Sys.Timer.callBaseMethod(this, 'dispose');},
updated: function() {
Sys.Timer.callBaseMethod(this, 'updated');if (this._enabled) {
this._stopTimer();this._startTimer();}
},
_timerCallback: function() {
var handler = this.get_events().getHandler("tick");if (handler) {
handler(this, Sys.EventArgs.Empty);}
},
_startTimer: function() {
this._timer = window.setInterval(Function.createDelegate(this, this._timerCallback), this._interval);},
_stopTimer: function() {
window.clearInterval(this._timer);this._timer = null;}
}
Sys.Timer.descriptor = {
properties: [ {name: 'interval', type: Number},
{name: 'enabled', type: Boolean} ],
events: [ {name: 'tick'} ]
}
Sys.Timer.registerClass('Sys.Timer', Sys.Component);
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();

}
/*
     FILE ARCHIVED ON 12:14:17 Jun 04, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:32:41 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.471
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 5.482
  LoadShardBlock: 52.407 (3)
  PetaboxLoader3.datanode: 82.814 (4)
  load_resource: 130.849
  PetaboxLoader3.resolve: 67.995
*/