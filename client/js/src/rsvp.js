var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
	footer = require('./footer.js');

var Rsvp = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            mobileMenu(),
            m("main", [
                m("div", {class: "hero-section"}, [
                    m("h1", "form to RSVP")
                ]),
            ]),
            footer()
        ])
    }
}

module.exports = Rsvp;