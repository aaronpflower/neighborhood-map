var Forecast = require('forecast.io'),
	m = require('mithril');

var boulderWeather = {
	view: function(ctrl) {
		return m("iframe#forecast_embed.weatherIframe", {src: "http://forecast.io/embed/#lat=40.0274&lon=105.2519&name=Boulder, CO&color=#00aaff&font=Helvetica&units=us"})
	}
}

module.exports = boulderWeather;