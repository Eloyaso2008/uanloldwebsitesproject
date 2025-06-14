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

    $.get('https://web.archive.org/web/20190805154747/https://api-ssl.bitly.com/v3/shorten?longUrl='+url+'&access_token='+access_token, function(data) {
      if (data.status_code == 500 || data.status_code == 403){
        console.log('Bitly error:'+data.status_code, data.status_txt);
      }else{
        window.open('https://web.archive.org/web/20190805154747/https://twitter.com/intent/tweet?text='+title+'. '+data.data.url, 'newwindow', 'width=500,height=450, left=500'); return false;
      }
    });

  });

});

}
/*
     FILE ARCHIVED ON 15:47:47 Aug 05, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:55:13 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.836
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.013
  esindex: 0.016
  cdx.remote: 11.423
  LoadShardBlock: 239.857 (3)
  PetaboxLoader3.datanode: 159.315 (5)
  load_resource: 272.07 (2)
  PetaboxLoader3.resolve: 144.656 (2)
*/