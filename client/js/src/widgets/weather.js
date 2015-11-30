var m = require('mithril');

var boulderWeather = {
	// controller: function() {
	// 	return { 
	// 		currentWeather: m.request({ 
	// 			method: "GET",
	// 			url: "https://api.forecast.io/forecast/75d6ce45a07f135b5c01ec05b09984ab/40.0274,-105.2519/",
	// 			dataType: "jsonp",
	// 			callback: "callback"
	// 		})
	// 	}	
	// },
	view: function() {
		return m("div.weather-section", [
			m("div.weather-item", [
				m("h2", "Alitude"),
				m("p", "Boulder and Lyons sit around 5,500ft above sea level.  For those travling from the low lands please remember to drink more water than you ever have in your life to prevent alituide sickness.  Each individual is affected by this differntly"),
				m("h2", "Typlical Weather"),
				m("p", "For Boulder and the surronding areas, June is typically warm and dry.  Highs temps range from the 80-95, and lows 60-70.  But be prepared for an afternoon thunderstorm.  They happen often.")
			]),
			m("div.weather-item", [
				m("iframe.forecastio-iframe", {src: "http://forecast.io/embed/#lat=40.0274&lon=-105.2519&name=Boulder, CO&color=#00aaff&font=Helvetica&units=us"})
			])
		])
	}
}

module.exports = boulderWeather;

// var boulderWeather = {
// 	controller: function() {
// 		return { 
// 			currentWeather: m.request({ 
// 				method: "GET",
// 				url: "https://api.forecast.io/forecast/75d6ce45a07f135b5c01ec05b09984ab/40.0274,-105.2519/",
// 				dataType: "jsonp",
// 				callback: "callback"
// 			})
// 		}	
// 	},
// 	view: function(ctrl) {
// 		console.log(ctrl.currentWeather);
// 		return m("div", "Current Boulder Temp:");
// 	}
// }
