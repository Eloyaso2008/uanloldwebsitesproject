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

$(document).ready(function(){

  $('.share_twitter').click(function(){

    var access_token = '9a783efab57d0a7eabf082962d1de8227d921761';
    var url = $(this).parents('div.contenedor-iconos').find('span.share_url').text();
    var title = $(this).parents('div.contenedor-iconos').find('span.share_title').text();

    $.get('https://web.archive.org/web/20250328031908/https://api-ssl.bitly.com/v3/shorten?longUrl='+url+'&access_token='+access_token, function(data) {
      if (data.status_code == 500 || data.status_code == 403){
        console.log('Bitly error:'+data.status_code, data.status_txt);
      }else{
        window.open('https://web.archive.org/web/20250328031908/https://twitter.com/intent/tweet?text='+title+'. '+data.data.url, 'newwindow', 'width=500,height=450, left=500'); return false;
      }
    });

  });

});

}
/*
     FILE ARCHIVED ON 03:19:08 Mar 28, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:56:48 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.477
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 6.072
  LoadShardBlock: 108.11 (3)
  PetaboxLoader3.datanode: 88.455 (4)
  load_resource: 83.75
  PetaboxLoader3.resolve: 78.47
*/