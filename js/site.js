(function($, document, window) {
$(document).ready(function(){
  $(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    pagination: false,
    loop: true,
    afterMove: function(next_page_index) {
      var real_index = $('section.active').data('index'),
        menu = $('#menu');
      menu.find('.active').removeClass('active');
      if (real_index > 1) {
        menu.show();
        menu.find('a:eq(' + (real_index - 2) + ')').addClass('active');
      }
      else {
        menu.hide();
      }
    }
  });

  $('#menu').hide().find("a").click(function() {
    event.preventDefault();
    $(".main").moveTo($(this).data('index'))
  });

  /**
   * Google Maps Integration
   */
  var position = new google.maps.LatLng(50.1193833, 8.6502);
  var mapOptions = {
    center: position,
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById("gmap"),
    mapOptions);

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "Campus Bockenheim, Frankfurt am Main, Germany"
    //icon: 'images/...'
  });

});
})(jQuery, document, window)
