var m = require("mithril"),
	menu = require("./menu.js"),
	footer = require("./footer.js"),
	countDownTimer = require('./widgets/timer.js');

var Home = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            m("main", [
            	m("div", {class: "count-down hero-section drop-shadow"}, [
            		m("div", [
            			m("div", {class: "timer"}, [
            				m("h1", countDownTimer),
            			]),
            		]),
            	]),
            	m("div", {class: "second-section"}, [
            		m("div", {class: "text-row"}, [
            			m("h1", "About Us")
           			]),
            		m("div", {class: "about-us"}, [
            			m("img", {src: "../../../client/img/brittney-home.jpg"}, {class: "left-section"}),
            			m("div", {class: "right-section"}, "About Brittney, she is cool.")
            		]),
            		m("div", {class: "about-us"}, [
            			m("div", {class: "right-section"}, "About Aaron, he is cool."),
            			m("img", {src: "../../../client/img/aaron-home.jpg"}, {class: "left-section"})
            		]),
            		m("div", {class: "text-row"}, [
            			m("h1", "How We Met")
           			]),
           			m("div", {class: "how-we-met"}, [
           				m("img", {src: "../../../client/img/ba-home.jpg"}),
            			m("p", "Eleven months ago I sat at Ozo with my back to the door and acted busy on my computer.  It was a noble attempt to calm my nerves but my attention quickly shifted up as I saw your beautiful smile. You said “Hi,” and I said, “Hi.”  If I had some sense to what I was doing I would have offered to buy your pint glass of green tea but the minions in my head were running in circles and into one another, shouting, how did we get here?!")
            		]),
            	]),
            	footer()
            ])
        ])
    }
};

module.exports = Home;