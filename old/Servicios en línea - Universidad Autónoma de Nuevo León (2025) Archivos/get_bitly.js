$(document).ready(function(){

  $('.share_twitter').click(function(){

    var access_token = '9a783efab57d0a7eabf082962d1de8227d921761';
    var url = $(this).parents('div.contenedor-iconos').find('span.share_url').text();
    var title = $(this).parents('div.contenedor-iconos').find('span.share_title').text();

    $.get('https://api-ssl.bitly.com/v3/shorten?longUrl='+url+'&access_token='+access_token, function(data) {
      if (data.status_code == 500 || data.status_code == 403){
        console.log('Bitly error:'+data.status_code, data.status_txt);
      }else{
        window.open('https://twitter.com/intent/tweet?text='+title+'. '+data.data.url, 'newwindow', 'width=500,height=450, left=500'); return false;
      }
    });

  });

});