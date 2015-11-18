var m = require('mithril');

var boulderMap = {
	controller: function() {
		this.init = function() {
			var map = L.map('map').setView([51.505, -0.09], 13);
		}
	},
	view: function(ctrl) {
		return m("div#map.map", {config: ctrl.init});	
	},
}

module.exports = boulderMap;