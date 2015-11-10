var m = require('mithril'),
	GoogleMapsLoader = require('google-maps');

var boulderMap = {
	controller: function() {
		GoogleMapsLoader.load(function(google) {
    		var map;
			function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 40.0274, lng: -105.2519},
			zoom: 13
			});
			var marker = new google.maps.Marker({
			position: {lat: 40.0274, lng: -105.2519},
			map: map,
			title: 'Hello World!'
		});
	},
	view: function() {

	}
}

module.exports = boulderMap;