var m = require("mithril"),
	menu = require("./menu.js"),
	footer = require("./footer.js"),
    GoogleMapsLoader = require('google-maps');

var Event = {
    controller: function() {
    	
    },
    view: function() {
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
		}
    	});
        return m("div", [
            menu(),
            m("h1", "Event Info"),
            m("div", {id: "#map"}, {class: "map"}),
            footer()
        ])
    }
}

module.exports = Event;