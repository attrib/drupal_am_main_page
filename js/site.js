/**
 * JQuery Part
 */
$(document).ready(function(){
  $(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600
  });

  var position = new google.maps.LatLng(50.1193833, 8.6502);
  var mapOptions = {
    center: position,
    zoom: 8
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
