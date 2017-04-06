alert('This library was created with the purpose to limit popups from movie streaming websites , it limits the popups to just one per player . Be WARNED some players may still show popups so this is not a 100% popup proof script');

function get_hostname(url) {
 
  
 var m = url.match(/^http:\/\/[^/]+/);
   
 return m ? m[0] : null;


}



$('iframe').each(function(){
  
   $(this).attr('sandbox','allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation');	
 
});


setInterval(function(){  

var comp = new RegExp(get_hostname(window.location.href));

$('a').each(function(){
   if(!comp.test($(this).attr('href'))){ 
       $(this).remove();
   }
});



}, 50);