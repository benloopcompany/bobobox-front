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
  var edgeOffset = 56; // px
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

// taby
jQuery(".objednavka__tabs li a").click(function(e) {
  jQuery(".objednavka__tabs li").removeClass("active");
  jQuery(this).parent().addClass('active');

  jQuery(".tab_1, .tab_2, .tab_3").hide();
  var tt=jQuery(this).parent().attr("id");
  /*jQuery("#objednavka__tab_img").prop("src","img/pricing/box_"+tt+".png");*/
  jQuery("."+tt).show();
  return false;

});


var url={
  "1":    "https://bobobox.typeform.com/to/jzBFim",
  "1_1":  "https://bobobox.typeform.com/to/jzBFim?siblings=Sourozenecky",
  "3":    "https://bobobox.typeform.com/to/nc8dsZ",
  "3_1":  "https://bobobox.typeform.com/to/nc8dsZ?siblings=Sourozenecky",
  "5":    "https://bobobox.typeform.com/to/tZfzxY",
  "5_1":  "https://bobobox.typeform.com/to/tZfzxY?siblings=Sourozenecky",
  "10":   "https://bobobox.typeform.com/to/zLxb9D",
  "10_1": "https://bobobox.typeform.com/to/zLxb9D?siblings=Sourozenecky"
};


// prepocitavani cen, nastaveni nákupního url
jQuery(".prepocet").click(function(e) {

  var aktivnitab=jQuery(".objednavka__tabs li.active").attr("id");

  if (aktivnitab=='tab_1'){
    var txt=jQuery(".tab_1 .objednavka__card__summary__2").html();
    var cenabox=359;
    var druhybox=129;
    var box=5
    if (jQuery("#3boxy").prop('checked')) {box=3;txt='Vybrány 3 Boxy';}
    if (jQuery("#5boxu").prop('checked')) {box=5;txt='Vybráno 5 Boxů + 1 Zdarma';}
    if (jQuery("#10boxu").prop('checked')) {box=10;txt='Vybráno 10 Boxů + 2 Zdarma + Dárek';}
    if (jQuery("#tab_1-material").prop('checked'))  sourozenec=druhybox; else sourozenec=0;
    jQuery(".tab_1 .objednavka__card__summary__1 span").html((cenabox*box)+(sourozenec*box));
    jQuery(".tab_1 .objednavka__card__summary__2").html(txt);
    if (sourozenec!=0) {finurl=box+'_1';} else {finurl=box;}
    jQuery(".tab_1 .button-objednat").attr("href",url[finurl]);

  } else if (aktivnitab=='tab_2'){
    var cenabox=429;
    var druhybox=129;
    var box=1;
    if (jQuery("#tab_2-material").prop('checked')) sourozenec=druhybox; else sourozenec=0;
    jQuery(".tab_2 .objednavka__card__summary__1 span").html(cenabox+sourozenec);
    if (sourozenec!=0) {finurl=box+'_1';} else {finurl=box;}
    jQuery(".tab_2 .button-objednat").prop("href",url[finurl]);

  } else if (aktivnitab=='tab_3'){

  }

});

/* typeform přepracování */
jQuery(".button-objednat").click(function(e){
  $( "body" ).append('<div id="typeform"><div class="content"><a href="javascript: return false;" class="close" onclick="jQuery(\'#typeform\').remove();"></a><iframe src=""></iframe></div></div>');
  jQuery("#typeform iframe").prop("src",jQuery(this).prop("href"));
  return false;
});

