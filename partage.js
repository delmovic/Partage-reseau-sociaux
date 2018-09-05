// Fonction pour centrer la fenetre de partage
  /*
    @Param Url,title,width,height
   */
  var popupCenter= function(url,title,width,height){
    var popupWidth= width || 640;
    var popupHeight= height || 320;
    var left= window.screenLeft || window.screenX;
    var top= window.screenTop || window.screenY;
    var windowWidth= window.innerWidth || document.documentElement.clientWidth;
    var windowHeight= window.innerHeight || document.documentElement.client.Height;
  
    var popupLeft = left + windowWidth /2 - popupWidth/2;
    var popupTop = top + windowHeight /2 - popupHeight/2;
window.open(url,title,'scrollbars=yes,width='+popupWidth+',height='+popupHeight+',top='+popupTop+',left='+popupLeft)
  };
  // Partage sur facebook
document.querySelector('.share_fb').addEventListener('click',function(e){
  e.preventDefault();
  // Url de votre page sera prise automatiquement mais localhost retournera une erreur 
  var url= document.location.href; 
  var shareUrl= 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url);
  
  popupCenter(shareUrl,'Partager sur Facebook');
});
// Partage sur Twitter https://twitter.com/intent/tweet

document.querySelector('.share_tw').addEventListener('click',function(e){
  e.preventDefault();
  var url= document.location.href;
  var shareUrl= 'https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+
  "&via= IvoireCode"+
  "&url="+ encodeURIComponent(url);
  popupCenter(shareUrl,'Partager sur Twitter');
});

// Partage sur google plus


document.querySelector('.share_gp').addEventListener('click',function(e){
  e.preventDefault();
  // Url de votre page sera prise automatiquement mais localhost retournera une erreur 
  var url=document.location.href;
  var shareUrl= 'https://plus.google.com/share?url='+ encodeURIComponent(url);
  popupCenter(shareUrl,'Partager sur Google +');
});

//Partage sur Linkedin

document.querySelector('.share_lk').addEventListener('click',function(e){
  e.preventDefault();
  var url= document.location.href;
  var shareUrl= 'https://www.linkedin.com/shareArticle?url='+ encodeURIComponent(url);
  popupCenter(shareUrl,'Partager sur Linkedin');
});