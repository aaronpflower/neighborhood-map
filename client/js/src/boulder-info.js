var m = require("mithril"),
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js"),
	footer = require("./footer.js");

var boulderInfo = {
    view: function() {
        return m("div", [
            menu(),
            mobileMenu,
            m("main", [
                m("div", {class: "boulder-hero-section"}, [
                    m("h1", "Boulder Info")
                ]),
                m("div.second-section", [
                    m("div.text-row", [
                        m("h1",  "Overview of BOCO")
                    ])
                ])
            ]),
            footer()
        ])
    }
}

module.exports = boulderInfo;