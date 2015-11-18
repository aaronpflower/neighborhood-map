// var m = require('mithril'),
// 	forecastIo = require('forecastio');

// var boulderWeather = {
// 	controller: function() {
// 		var forecastIo = new forecastIo('<75d6ce45a07f135b5c01ec05b09984abgul>');
// 		forecastIo.forecast('51.506', '-0.127', function(err, data) {
//   		if (err) throw err;
//   		console.log(JSON.stringify(data, null, 2));
// 		});

// 	},
// 	view: function(ctrl) {
// 		console.log(ctrl);
// 		return m("div", ctrl);
// 	}
// }

// module.exports = boulderWeather;


		// setInterval(function(){
		// 	this.current = m.request({dataType: "jsonp", callbackKey: "jsoncallback", url: "http://api.forecast.io/forecast/75d6ce45a07f135b5c01ec05b09984ab/40.0274,-105.2519,currently"});
		// 	m.redraw();
		// }.bind(this), 1000)