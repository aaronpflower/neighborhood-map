var m = require("mithril"),
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js"),
	footer = require("./footer.js"),
    // boulderMap = require("./widgets/map.js"),
    Weather = require("./widgets/weather.js");

var boulderInfo = {
    view: function() {
        return m("div", [
            menu,
            mobileMenu,
            m("div", {class: "hero-section boulder-hero drop-shadow"}, [
                m("h1", "Boulder Info")
            ]),
            m("main.main-border-boulder-info", [
                m("div.main-section", [
                    m("div.text-row", [
                        m("h1", "Boulder Details")
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
                    // boulderMap,
                    m("div.weather-section", [
                        m("div.text-row", [
                            m("h1", "Weather for Boulder")
                        ]),
                    ]),
                    // Weather,
                footer(),
                ])
            ])
        ])
    }
}

module.exports = boulderInfo;