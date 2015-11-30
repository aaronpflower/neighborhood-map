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
                m("h1", "Getting Familar with Boulder")
            ]),
            m("main.main-border-boulder-info", [
                m("div.main-section", [
                    m("div.text-row", [
                        m("h1", "The 4 step plan to Boulder")
                    ]),
                    m("div.step-section", [
                        m("div.steps", [
                            m("h1", "Step 1: Getting to Boulder"),
                            m("p", "Denver International Airport is the best place to fly into, but watch out for the creepy blue horse.  It's about a 45 minute drive away from Boulder."),
                            m("p", "You can either rent a car or there is a bus that leaves once a hour that takes you to town.  Brittney and Aaron take it all the time, sometimes just for fun.", [
                                 m("a[href='http://www3.rtd-denver.com/schedules/getSchedule.action?runboardId=153&routeId=AB&routeType=9&direction=W-Bound&serviceType=3#direction']", "Go here for the schedule."),
                            ]),
                            m("img", {src: "../../../client/img/down-arrow.svg"})
                        ]),
                        m("div.steps", [
                            m("h1", "Step 2: Where Sleep"),
                            m("p", "Everything"),
                            m("img", {src: "../../../client/img/down-arrow.svg"})
                        ]),
                        m("div.steps", [
                            m("h1", "Step 3: Where to eat and drink"),
                            m("p", "Stuff"),
                            m("img", {src: "../../../client/img/down-arrow.svg"})
                        ]),
                        m("div.steps", [
                            m("h1", "Step 4: Where to play"),
                            m("p", "Stuff"),
                            m("img", {src: "../../../client/img/down-arrow.svg"})
                        ])
                    ]),
                    m("div.text-row", [
                        m("h1", "Weather and Climate")
                    ]),
                    Weather,
                footer(),
                ])
            ])
        ])
    }
}

module.exports = boulderInfo;