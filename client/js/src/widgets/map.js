var m = require('mithril');

var boulderMap = {
	controller: function() {
		return { 
			leafletMap: m.request({ 
				method: "GET",
				url: "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js",
				dataType: "jsonp",
				callback: "callback"
			})
		}	
	},
	view: function(ctrl) {
		console.log(ctrl.leafletMap);
		return m("div#map.map", {config: ctrl.init});	
	},
}

module.exports = boulderMap;


// script(src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js")


// var boulderMap = {
// 	controller: function() {
// 		this.init = function() {
// 			var map = L.map('map').setView([51.505, -0.09], 13);
// 		}
// 	},
// 	view: function(ctrl) {
// 		return m("div#map.map", {config: ctrl.init});	
// 	},
// }