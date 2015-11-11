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
                m("div.second-section", [
                    m("iframe", {src: "http://www.target.com/"}, {target:"_top"})
                ])
            ]),
            footer()
        ])
    }
}

module.exports = Registry;