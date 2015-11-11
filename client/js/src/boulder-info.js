var m = require("mithril"),
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js"),
	footer = require("./footer.js"),
    boulderMap = require("./widgets/map.js");

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
                        m("h1", "Boulder Details")
                    ])
                ]),
                m("div.info-section", [
                    m("div.info-item", [
                        m("h1", "Places to Stay"),
                        m("p", "Somewhere"),
                    ]),
                    m("div.info-item", [
                        m("h1", "What to do"),
                        m("p", "Everything"),
                    ]),
                    m("div.info-item", [
                        m("h1", "What to expect"),
                        m("p", "Stuff"),
                    ]),
                ]),
                m("div.second-section", [
                    m("div.text-row", [
                        m("h1",  "Interactive Map")
                    ])
                ]),
                boulderMap,
                m("div.weather-section", [
                    m("div.text-row", [
                        m("h1", "Weather for Boulder")
                    ])
                ])
            ]),
            footer()
        ])
    }
}

module.exports = boulderInfo;