var m = require('mithril');

var boulderWeather = {
	controller: function() {
		return { 
			currentWeather: m.request({ 
				method: "GET",
				url: "https://api.forecast.io/forecast/75d6ce45a07f135b5c01ec05b09984ab/40.0274,-105.2519/",
				dataType: "jsonp",
				callback: "callback"
			})
		}	
	},
	view: function(ctrl) {
		console.log(ctrl.currentWeather);
		return m("div", "Current Boulder Temp:");
	}
}

module.exports = boulderWeather;


