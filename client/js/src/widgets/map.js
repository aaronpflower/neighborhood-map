var m = require('mithril');

var boulderMap = {
	controller: function() {
		return { 
			googleMap: m.request({ 
				method: "GET",
				url: "http://maps.googleapis.com/maps/api/js?key=AIzaSyCpRRMEy9sBC95vWunMUBju38m-2XwwEco&callback=initMap",
				dataType: "jsonp",
				callback: "callback"
			})
		},
		this.initMap = function() {
  			var map = new google.maps.Map(document.getElementById('map'), {
	    		center: {lat: 40.0274, lng: -105.2519},
	    		zoom: 8
	    	});
		}	
	},
	view: function(ctrl) {
		console.log(ctrl.map);
		return m("div#map.map", {config: ctrl.initMap});	
	},
}

module.exports = boulderMap;