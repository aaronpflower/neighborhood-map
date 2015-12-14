var m = require("mithril"),
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js"),
	footer = require("./footer.js"),
    Weather = require("./widgets/weather.js");

var boulderInfo = {
    view: function() {
        return m("div", [
            menu,
            mobileMenu,
            m("div", {class: "hero-section boulder-hero drop-shadow"}, [
                m("h1", "Boulder, Colorado")
            ]),
            m("main.main-border-boulder-info", [
                m("div.main-section", [
                    m("div.step-section", [
                        m("h1", "The 4 Step plan to Boulder"),
                        m("h2", "Step 1: Getting to Boulder"),
                        m("div.step", [
                            m("div.step-left", [
                                m("p", "Denver International Airport is only a 45 minute drive away from Boulder.  But watch out for the creepy blue horse. You can rent rent, or take a bus that leaves once an hour to Boulder.  Brittney and Aaron use it all the time, sometimes for a fun date night.")
                            ]),
                            m("div.step-right", [
                                m("a[href='http://www3.rtd-denver.com/schedules/getSchedule.action?runboardId=153&routeId=AB&routeType=9&direction=W-Bound&serviceType=3#direction']", [
                                    m("button.button", "Bus Schedule")
                                ]),
                            ]),
                        ]),
                        m("img", {src: "../../../client/img/down-arrow.svg"}),
                        m("h2", "Step 2: Where Sleep"),
                        m("div.step", [
                            m("div.step-left", [
                                m("p", "Boulder is where we live and the wedding is just 20 miles up the road in Lyons.  So there are a couple options of where you could stay while you are here.  There are plenty of hotels in town, or airBnB. Also if you are looking to find cheaper options we would recommend Longmont, Louisville, Superior, or Lafayette."),
                            ]),
                            m("div.step-right", [
                                m("a[href='#']", [
                                    m("button.button", "Boulder AirBnB")
                                ]),
                                m("a[href='#']", [
                                    m("button.button", "Longmont")
                                ]),
                                m("a[href='#']", [
                                    m("button.button", "Louisville")
                                ]),
                                m("a[href='#']", [
                                    m("button.button", "Lafayette")
                                ]),
                            ]),
                        ]),
                        m("img", {src: "../../../client/img/down-arrow.svg"}),
                         m("h2", "Step 3: Where to eat and drink"),
                        m("div.step", [
                            m("div.step-left", [
                               m("p", "Boulder is full of Breweries and a wide variety of restaurants.  We would recommend Avery Brewery, West End Tavern, Bitter Bar, and for the midwest folk, McDonald's, and Dunkin Donuts. Go here for a full list of places in downtown Boulder."),
                            ]),
                            m("div.step-right", [
                                m("a[href='#']", [
                                    m("button.button", "Avery")
                                ]),
                                m("a[href='#']", [
                                    m("button.button", "Down Town Boulder")
                                ]),
                            ]),
                        ]),
                        m("img", {src: "../../../client/img/down-arrow.svg"}),
                        m("h2", "Step 4: Where to play"),
                        m("div.step", [
                            m("div.step-left", [
                               m("p", "In town go to the Flatirons,  just do it.  If you have a full day Rocky Mountain National Park is only a hour drive away, and is simply amazing. Another good day trip is the Indian Peaks Wilderness."),
                            ]),
                            m("div.step-right", [
                                m("a[href='#']", [
                                    m("button.button", "Boulder Hiking")
                                ]),
                                m("a[href='#']", [
                                    m("button.button", "Rocky Mountain NP")
                                ]),
                                m("a[href='#']", [
                                    m("button.button", "Brainer Lake")
                                ]),
                            ]),
                        ]),
                        m("img", {src: "../../../client/img/down-arrow.svg"}),
                        m("h2", "Step 5: Weather and Climate"),
                        m("div.step", [
                            m("div.weather-section", [
                                m("div.weather-item", [
                                    m("h2", "Altitude"),
                                    m("p", "Boulder and Lyons sit around 5,500ft above sea level.  For those travling from the low lands please remember to drink more water than you ever have in your life to prevent alituide sickness.  Each individual is affected by this differntly"),
                                    m("h2", "Typlical Weather"),
                                    m("p", "For Boulder and the surronding areas, June is typically warm and dry.  Highs temps range from the 80-95, and lows 60-70.  But be prepared for an afternoon thunderstorm.  They happen often.")
                                ]),
                                m("div.weather-item", [
                                    m("iframe.forecastio-iframe", {src: "https://forecast.io/embed/#lat=40.0274&lon=-105.2519&name=Boulder, CO&color=#00aaff&font=Helvetica&units=us"})
                                ])
                            ]) 
                        ])
                    ]),
                footer(),
                ])
            ])
        ])
    }
}

module.exports = boulderInfo;


 


