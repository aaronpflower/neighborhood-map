var m = require('mithril');

var countDownTimer = {
    controller: function() {
        (setInterval(function(){
            var deadline = "2016/6/19 15:59:59";
            this.t = Date.parse(deadline) - Date.parse(new Date());
            this.seconds = Math.floor( (this.t/1000) % 60 );
            this.minutes = Math.floor( (this.t/1000/60) % 60 );
            this.hours = Math.floor( (this.t/(1000*60*60)) % 24 );
            this.days = Math.floor( this.t/(1000*60*60*24) );
            m.redraw();
        }.bind(this), 1000))
    },

    view: function(ctrl) {
        return m("div.timer-container", [
            m("h2", "Not that we are counting..."),
            m("div", {class: "timer-wrapper"}, [
                m("div", {class: "timer"}, [
                    m("div.timer-days", [
                        m("h2", ctrl.days),
                        m("p", "Days")
                    ]), 
                ]),
                m("div", {class: "timer"}, [
                    m("div.timer-hours", [
                        m("h2", ctrl.hours),
                        m("p", "Hours")
                    ]), 
                ]),
                m("div", {class: "timer"}, [
                    m("div.timer-minutes", [
                        m("h2", ctrl.minutes),
                        m("p", "Minutes")
                    ]), 
                ]),
                m("div", {class: "timer"}, [
                    m("div.timer-seconds", [
                        m("h2", ctrl.seconds),
                        m("p", "Seconds")
                    ]),
                ])
             ])
        ])
    }
}

module.exports = countDownTimer;