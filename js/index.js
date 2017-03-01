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
  })
});

var rellax = new Rellax('.ficury__background');
var aos = AOS.init();
