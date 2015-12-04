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
            m("div.hero-section.rsvp-hero"),
            m("main.main-border-rsvp", [
                m("div.main-section", [
                    m("h1", "The 4 Step plan to RSPV"),
                    m("div.steps", [
                        m("h2", "Step 1: Getting to Boulder"),
                        m("p", "Denver International Airport is only a 45 minute drive away from Boulder.  But watch out for the creepy blue horse."),
                        m("p", "You can rent rent, or take a bus that leaves once an hour to Boulder.  Brittney and Aaron use it all the time, sometimes for a fun date night.", [
                            m("a[href='http://www3.rtd-denver.com/schedules/getSchedule.action?runboardId=153&routeId=AB&routeType=9&direction=W-Bound&serviceType=3#direction']", "Go here for the schedule."),
                        ]),
                        m("img", {src: "../../../client/img/down-arrow.svg"})
                    ]),
                    m("div.steps", [
                        m("h2", "Step 2: Where Sleep"),
                        m("p", "Boulder is where we live and the wedding is just 20 miles up the road in Lyons.  So there are a couple options of where you could stay while you are here.  There are plenty of hotels in town, or airBnB. "),
                        m("p", "Also if you are looking to find cheaper options we would recommend Longmont, Louisville, Superior, or Lafayette."),
                        m("img", {src: "../../../client/img/down-arrow.svg"})
                    ]),
                    m("div.steps", [
                        m("h2", "Step 3: Where to eat and drink"),
                        m("p", "Boulder is full of Breweries and a wide variety of restaurants.  We would recommend Avery Brewery, West End Tavern, Bitter Bar, and for the midwest folk, McDonald's, and Dunkin Donuts."),
                        m("p", "Go here for a full list of places in downtown Boulder."),
                        m("img", {src: "../../../client/img/down-arrow.svg"})
                    ]),
                    m("div.steps", [
                        m("h2", "Step 4: Where to play"),
                        m("p", "In town go to the Flatirons,  just do it.  If you have a full day Rocky Mountain National Park is only a hour drive away, and is simply amazing."),
                        m("p", "Another good day trip is the Indian Peaks Wilderness."),
                        m("img", {src: "../../../client/img/down-arrow.svg"})
                    ]),
                ]),  
            footer(),
            ])
        ])
    }
}

module.exports = Rsvp;