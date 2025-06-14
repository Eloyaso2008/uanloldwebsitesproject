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

AjaxControlToolkit.FloatingBehavior = function(element) {
AjaxControlToolkit.FloatingBehavior.initializeBase(this,[element]);var _handle;var _location;var _dragStartLocation;var _profileProperty;var _profileComponent;var _mouseDownHandler = Function.createDelegate(this, mouseDownHandler);this.add_move = function(handler) {
this.get_events().addHandler('move', handler);}
this.remove_move = function(handler) {
this.get_events().removeHandler('move', handler);}
this.get_handle = function() {
return _handle;}
this.set_handle = function(value) {
if (_handle != null) {
$removeHandler(_handle, "mousedown", _mouseDownHandler);}
_handle = value;$addHandler(_handle, "mousedown", _mouseDownHandler);}
this.get_profileProperty = function() {
return _profileProperty;}
this.set_profileProperty = function(value) {
_profileProperty = value;}
this.get_profileComponent = function() {
return _profileComponent;}
this.set_profileComponent = function(value) {
_profileComponent = value;}
this.get_location = function() {
return _location;}
this.set_location = function(value) {
if (_location != value) {
_location = value;if (this.get_isInitialized()) { 
$common.setLocation(this.get_element(), _location);}
this.raisePropertyChanged('location');}
}
this.initialize = function() {
AjaxControlToolkit.FloatingBehavior.callBaseMethod(this, 'initialize');AjaxControlToolkit.DragDropManager.registerDropTarget(this);var el = this.get_element();if (!_location) { 
_location = $common.getLocation(el);}
el.style.position = "fixed";$common.setLocation(el, _location);}
this.dispose = function() {
AjaxControlToolkit.DragDropManager.unregisterDropTarget(this);if (_handle && _mouseDownHandler) {
$removeHandler(_handle, "mousedown", _mouseDownHandler);}
_mouseDownHandler = null;AjaxControlToolkit.FloatingBehavior.callBaseMethod(this, 'dispose');}
this.checkCanDrag = function(element) {
var undraggableTagNames = ["input", "button", "select", "textarea", "label"];var tagName = element.tagName;if ((tagName.toLowerCase() == "a") && (element.href != null) && (element.href.length > 0)) {
return false;}
if (Array.indexOf(undraggableTagNames, tagName.toLowerCase()) > -1) {
return false;}
return true;}
function mouseDownHandler(ev) {
window._event = ev;var el = this.get_element();if (this.checkCanDrag(ev.target)) {
_dragStartLocation = $common.getLocation(el);ev.preventDefault();this.startDragDrop(el);}
}
this.get_dragDataType = function() {
return "_floatingObject";}
this.getDragData = function(context) {
return null;}
this.get_dragMode = function() {
return AjaxControlToolkit.DragMode.Move;}
this.onDragStart = function() { }
this.onDrag = function() { }
this.onDragEnd = function(canceled) {
if (!canceled) {
var handler = this.get_events().getHandler('move');if(handler) {
var cancelArgs = new Sys.CancelEventArgs();handler(this, cancelArgs);canceled = cancelArgs.get_cancel();} 
}
var el = this.get_element();if (canceled) {
$common.setLocation(el, _dragStartLocation);} else {
_location = $common.getLocation(el);this.raisePropertyChanged('location');}
}
this.startDragDrop = function(dragVisual) {
AjaxControlToolkit.DragDropManager.startDragDrop(this, dragVisual, null);}
this.get_dropTargetElement = function() {
return document.body;}
this.canDrop = function(dragMode, dataType, data) {
return (dataType == "_floatingObject");}
this.drop = function(dragMode, dataType, data) {}
this.onDragEnterTarget = function(dragMode, dataType, data) {}
this.onDragLeaveTarget = function(dragMode, dataType, data) {}
this.onDragInTarget = function(dragMode, dataType, data) {}
}
AjaxControlToolkit.FloatingBehavior.registerClass('AjaxControlToolkit.FloatingBehavior', AjaxControlToolkit.BehaviorBase, AjaxControlToolkit.IDragSource, AjaxControlToolkit.IDropTarget, Sys.IDisposable);

}
/*
     FILE ARCHIVED ON 04:16:51 Sep 02, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:33:33 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.901
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.022
  esindex: 0.017
  cdx.remote: 6.6
  LoadShardBlock: 253.071 (3)
  PetaboxLoader3.datanode: 253.827 (4)
  load_resource: 66.372
  PetaboxLoader3.resolve: 40.807
*/