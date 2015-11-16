var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
	footer = require('./footer.js');

var Registry = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            mobileMenu,
            m("main", [
                m("div", {class: "hero-section"}, [
                    m("h1", "Registry Info")
                ]),
                m("div.second-section")
            ]),
            footer()
        ])
    }
}

module.exports = Registry;