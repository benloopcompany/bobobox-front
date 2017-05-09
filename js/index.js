jQuery(function(){
  jQuery("a.rozvijime__play-video__link").YouTubePopUp();
  jQuery("a.ficury__playbox__play").YouTubePopUp();

  jQuery("a.rozvijime__play-video__link").click(function(e) {
    fbq('trackCustom', 'VideoPlay', {
      type: 'intro'
    });
  });
  jQuery("a.ficury__playbox__play").click(function(e) {
    fbq('trackCustom', 'VideoPlay', {
      type: 'features'
    });
  });

  jQuery("a.objednavka__vybrat, a.button-objednat").click(function(e) {
    fbq('trackCustom', 'OrderFormClick');
  });
  
  jQuery('#mobile-menu-btn').click(function() {
    if (jQuery( "#mobile-menu-btn" ).hasClass( "open" )){  
      jQuery( "#mobile-menu-btn" ).removeClass("open");
      jQuery( ".page-nav" ).removeClass("open");
    } else {
      jQuery( "#mobile-menu-btn" ).addClass("open");
      jQuery( ".page-nav" ).addClass("open");
      }      
  });
  
  jQuery('.page-nav ul a').click(function() {
      jQuery( "#mobile-menu-btn" ).removeClass("open");
      jQuery( ".page-nav" ).removeClass("open");
  });
           
  
  
});

var rellax = new Rellax('.ficury__background');
var aos = AOS.init();

if (typeof zenscroll != 'undefined') {
  var defaultDuration = 777; // ms
  var edgeOffset = 150; // px
  zenscroll.setup(defaultDuration, edgeOffset);
}

var lastId,
    topMenu = $(".page-nav ul"),
    topMenuHeight = topMenu.outerHeight()+200,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

jQuery(window).scroll(function(){
   var fromTop = jQuery(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if (jQuery(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
