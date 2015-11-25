var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
	footer = require('./footer.js');

var Rsvp = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu,
            mobileMenu,
            m("div", {class: "hero-section rsvp-hero"}, [
                m("h1", "RSVP")
            ]),
            m("main.main-border-rsvp", [
                m("div.main-section", [
                    m("div", {class: "text-row"}, [
                        m("h1", "Coming Soon...")
                    ])
                ]),  
            footer(),
            ])
        ])
    }
}

module.exports = Rsvp;