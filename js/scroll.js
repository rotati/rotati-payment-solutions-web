$(function() {
  $('a[href^="#"]').click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var height = 0;
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top- height
        }, 1000);
        document.location.hash = this.hash;
        return true;
      }
    }
  });
});