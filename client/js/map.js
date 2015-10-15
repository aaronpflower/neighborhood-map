var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.0274, lng: -105.2519},
    zoom: 13
  });
}