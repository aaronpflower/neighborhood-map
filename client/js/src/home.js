var m = require("mithril"),
	menu = require("./menu.js"),
	footer = require("./footer.js");
	// countDownTimer = require('./../timer.js');

var Home = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            m("h1", "About Us"),
            footer()
        ])
    }
};

module.exports = Home;