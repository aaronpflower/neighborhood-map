var m = require("mithril"),
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js"),
	footer = require("./footer.js");

var boulderInfo = {
    controller: function() {
        this.heroHeight = function() {
            var heroWrapper = document.querySelector('.hero-wrapper').offsetHeight;
            var width = document.documentElement.clientWidth;
            if(width > 800) {
                document.querySelector('.main-border-boulder-info').style.top = heroWrapper - 50 + 'px';
            }
            else {
                document.querySelector('.main-border-boulder-info').style.top = heroWrapper + 'px';
            }
        }
    },
    view: function(ctrl) {
        return m("div", [
            menu,
            mobileMenu,
            m("div.hero-wrapper", {config: ctrl.heroHeight}, [
                m("div.hero-item", [
                    m("img", {src: "/img/boulder.jpg"})
                ]),
                m("div.hero-content", [
                    m("h1", "6 Step Plan to Boulder")
                ])
            ]),
            m("main.main-border-boulder-info", [
                m("div.main-section", [
                    m("div.step-section", [
                        m("div.step", [
                            m("div.step-content", [
                                m("h2", "Step 1: Getting to Boulder"),
                                m("div.step-left", [
                                    m("p", "Denver International Airport (DIA) is located about 45 minutes from Boulder. Once you arrive at DIA we recommend either picking up a rental car or taking an RTD bus to Boulder. Buses run hourly and are $13/person. Luggage can be loaded underneath, and the bus has more of a charter bus feel that public transit. Bussing is what most locals (including us) do to get to and from the airport. You can find the bus schedule and more information here.")
                                ]),
                                m("div.step-right", [
                                    m("a[href='http://www3.rtd-denver.com/schedules/getSchedule.action?runboardId=153&routeId=AB&routeType=9&direction=W-Bound&serviceType=3#direction'] [target='blank']", [
                                        m("button.step-button", "Bus Schedule")
                                    ]),
                                ])
                            ])
                        ]),
                        m("div.step", [
                            m("div.step-content", [
                                m("h2", "Step 2: How to get around"),
                                m("div.step-left", [
                                    m("p", "There are a few ways to get around town."),
                                ]),
                                m("div.step-right", [
                                    m("a[href='http://www.flydenver.com/parking_transit/car-rentals'] [target='blank']", [
                                        m("button.step-button", "Denver Airport Car Rentals")
                                    ]),
                                    m("a[href='https://www.uber.com/cities/denver'] [target='blank']", [
                                        m("button.step-button", "Uber")
                                    ]),
                                    m("a[href='https://www.lyft.com/cities/denver'] [target='blank']", [
                                        m("button.step-button", "Lyft"),
                                    ])
                                ]),
                            ])
                        ]),
                        m("div.step", [
                            m("div.step-content", [
                                m("h2", "Step 3: Where Sleep"),
                                m("div.step-left", [
                                    m("p", "The wedding will take place in Lyons which is about 20 miles north of Boulder. We recommend coordinating with other guests if possible and sharing AirBnb’s or hotel rooms. Also the sister property of the Farmette, the Riverbend has Tiny Homes to rent."),
                                ]),
                                m("div.step-right", [
                                    m("a[href='https://www.vrbo.com/vacation-rentals/usa/colorado/front-range/boulder?k_clickid=4efa8b00-43a4-4cc1-9cc5-fadff61d3aa1&gclid=Cj0KEQiA5oy1BRDQh6Wd572hsfkBEiQAfdTPCvuvChUinW0Dq0gUNWT4SLpwzzIB8XGkEi2rUickV7YaAqQD8P8HAQ'] [target='blank']", [
                                        m("button.step-button", "Boulder AirBnB")
                                    ]),
                                    m("a[href='https://www.airbnb.com/s/Boulder--CO'] [target='blank']", [
                                        m("button.step-button", "Boulder VRBO")
                                    ]),
                                    m("a[href='https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=boulder%20colorado%20hotes'] [target='blank']", [
                                        m("button.step-button", "Boulder Hotels")
                                    ]),
                                    m("a[href='http://weecasa.com/'] [target='blank']", [
                                        m("button.step-button", "River Bend Tiny Homes"),
                                    ])
                                ]),
                            ])
                        ]),
                        m("div.step", [
                            m("div.step-content", [
                                m("h2", "Step 4: Where to eat and drink"),
                                m("div.step-left", [
                                   m("p", "Boulder is full of amazing local craft breweries and restaurants. A few of our favorites are Avery Brewery, West End Tavern, Tahona, The Kitchen Next Door, and the Bitter Bar."),
                                ]),
                                m("div.step-right", [
                                    m("a[href='http://averybrewing.com/'] [target='blank']", [
                                        m("button.step-button", "Avery")
                                    ]),
                                    m("a[href='http://www.thewestendtavern.com/'] [target='blank']", [
                                        m("button.step-button", "West End Tavern")
                                    ]),
                                    m("a[href='http://www.tahonaboulder.com/'] [target='blank']", [
                                        m("button.step-button", "Tahona")
                                    ]),
                                    m("a[href='http://thekitchen.com/nextdoor-boulder/'] [target='blank']", [
                                        m("button.step-button", "The Kitchen Next Door")
                                    ]),
                                    m("a[href='http://www.thebitterbar.com/'] [target='blank']", [
                                        m("button.step-button", "Bitter Bar")
                                    ]),
                                ]),
                            ])
                        ]),
                        m("div.step", [
                            m("div.step-content", [
                                m("h2", "Step 5: Where to play"),
                                m("div.step-left", [
                                   m("p", "Trails and Open Space Scenic Hikes near Boulder"),
                                ]),
                                m("div.step-right", [
                                    m("a[href='#'] [target='blank']", [
                                        m("button.step-button", "Chautauqua Park/Flatirons")
                                    ]),
                                    m("a[href='#'] [target='blank']", [
                                        m("button.step-button", "Wonderland Lake")
                                    ]),
                                    m("a[href='#'] [target='blank']", [
                                        m("button.step-button", "Hogback")
                                    ]),
                                ]),
                                m("div.step-left", [
                                   m("p", "Rocky Mountain National Park"),
                                ]),
                                m("div.step-right", [
                                    m("a[href='http://www.rockymountainhikingtrails.com/bear-lake-nature-trail.htm'] [target='blank']", [
                                        m("button.step-button", "Bear Lake")
                                    ]),
                                    m("a[href='http://rockymountainnationalpark.com/trails-maps/trail-ridge-road'] [target='blank']", [
                                        m("button.step-button", "Trail Ridge Road")
                                    ]),
                                ]),
                                m("div.step-left", [
                                   m("p", "Indian Peaks Wildnerness"),
                                ]),
                                m("div.step-right", [
                                    m("a[href='http://www.fs.usda.gov/wps/portal/fsinternet/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gDfxMDT8MwRydLA1cj72BTJw8jAwjQL8h2VAQAzHJMsQ!!/?ss=110210&navtype=BROWSEBYSUBJECT&cid=FSE_003741&navid=110000000000000&pnavid=null&position=BROWSEBYSUBJECT&recid=28182&ttype=recarea&pname=Arapaho%2520&%2520Roosevelt%2520National%2520Forests%2520Pawnee%2520National%2520Grassland%2520-%2520Brainard%2520Lake%2520Recreation%2520Area'] [target='blank']", [
                                        m("button.step-button", "Lake Isabelle")
                                    ]),
                                    m("a[href='http://alltrails.com/trail/us/colorado/lake-isabelle'] [target='blank']", [
                                        m("button.step-button", "Brainard Lake")
                                    ]),
                                ]),
                            ])
                        ]),
                        m("div.step", [
                            m("div.step-content.last", [
                                m("h2", "Step 6: Weather and Climate"),
                                m("div.step-left", [
                                    m("p", "Boulder and Lyons sit around 5,500ft above sea level.  For those traveling from the lowlands please remember to drink more water than you ever have in your life to prevent altitude sickness.  Each individual is affected by this differently."),
                                    m("p", "For Boulder and the surrounding areas, June is typically warm and dry.  Highs temps range from the 80-95, and lows 60-70.  But be prepared for an afternoon thunderstorm.  They happen often.")
                                ]),
                                m("div.step-right", [
                                    m("iframe.weather-iframe", {src: "https://forecast.io/embed/#lat=40.0274&lon=-105.2519&name=Boulder, CO&color=#00aaff&font=Helvetica&units=us"})
                                ]),
                            ])
                        ]),
                    ]),
                footer(),
                ])
            ])
        ])
    }
}

module.exports = boulderInfo;





