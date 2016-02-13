var $ = require('jquery'),
	m = require('mithril');

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.hero-wrapper').css({
        'opacity': ((height - scrollTop) / height)
    });
});

// function initMap() {
// 	var mapDiv = document.getElementById('map');
// 	var map = new google.maps.Map(mapDiv, {
// 		center: {lat: 44.540, lng: -78.546},
// 		zoom: 8
// 	});
// }