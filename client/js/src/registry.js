var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
	footer = require('./footer.js');

var Registry = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu,
            mobileMenu,
            m("div", {class: "hero-section registry-hero"}, [
                m("h1", "Registry Info")
            ]),
            m("main", [
                m("div.second-section", [
                    m("div", {class: "text-row"}, [
                        m("h1", "Coming Soon...")
                    ])
                ])  
            ]),
            footer()
        ])
    }
}

module.exports = Registry;