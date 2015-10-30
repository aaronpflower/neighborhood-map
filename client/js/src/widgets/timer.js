var m = require('mithril');

var countDownTimer = {
    controller: function() {
        setInterval(function(){
            var deadline = "2016/6/19 15:59:59";
            this.t = Date.parse(deadline) - Date.parse(new Date());
            this.seconds = Math.floor( (this.t/1000) % 60 );
            this.minutes = Math.floor( (this.t/1000/60) % 60 );
            this.hours = Math.floor( (this.t/(1000*60*60)) % 24 );
            this.days = Math.floor( this.t/(1000*60*60*24) );
            m.redraw();
        }.bind(this), 1000)

    },

    view: function(ctrl) {
        return m("h1", "Days: ", ctrl.days, " ", "Hours: ", ctrl.hours, " ", "Minutes: ", ctrl.minutes, " ", "Seconds: ", ctrl.seconds)
    }
}

module.exports = countDownTimer;