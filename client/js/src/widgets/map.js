var m = require('mithril');
	// GoogleMapsLoader = require('google-maps');

var boulderMap = {
	controller: function() {
		this.init = function() {
			var map;
			window.onload = function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
			    	center: {lat: 40.0274, lng: -105.2519},
			    	zoom: 12
			 	});
			}
		m.redraw();
		}
	},
	view: function(ctrl) {
		return m("div#map.map", {config: ctrl.init})
	}
}

module.exports = boulderMap;