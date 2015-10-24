var m = require('mithril');

var countDownTimer = {
	controller: function() {
		var deadline = "2016/6/12 23:59:59 GMT+02:00";

		getTimeRemaining = function(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor( (t/1000) % 60 );
			var minutes = Math.floor( (t/1000/60) % 60 );
			var hours = Math.floor( (t/(1000*60*60)) % 24 );
			var days = Math.floor( t/(1000*60*60*24) );
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}
	},
	view: function() {
		return m("div", {id: "clockdiv"}, "Count Down", [
			m("div", {controller: getTimeRemaining.days})
		])
	}
};

 
module.exports = countDownTimer;