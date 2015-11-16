var m = require('mithril');

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
		}
	},
	view: function(ctrl) {
		m.render(document.body, [
			m("div#map.map", {config: ctrl.init})
		])
	}
}

module.exports = boulderMap;