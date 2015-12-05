var m = require('mithril');

var boulderMap = {
	controller: function() {
		return { 
			googleMap: m.request({ 
				method: "GET",
				url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpRRMEy9sBC95vWunMUBju38m-2XwwEco&callback=initMap",
				dataType: "jsonp",
				callback: "callback"
			})
		}	
	},
	view: function(ctrl) {
		console.log(ctrl.googleMap);
		return m("div#map.map", {config: ctrl.initMap});	
	},
	initMap: function() {
  		var map = new google.maps.Map(document.getElementById('map'), {
	    	center: {lat: 40.0274, lng: -105.2519},
	    	zoom: 8
	    });
	}
}

module.exports = boulderMap;