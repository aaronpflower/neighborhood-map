var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
    boulderMap = require("./widgets/map.js"),
	footer = require('./footer.js');

var weddingDetails = {
    controller: function() {
        var lyons = {lat: 40.2170362, lng: -105.2601925};

        return {
            map: function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: lyons,
                    zoom: 10
                });
                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Lyons Farmette</h1>'+
                    '<div id="bodyContent">'+
                    '<p>It is located about 17 miles north of Boulder, ' +
                    'and it is easy to get to. '+
                    'Take hwy 36 north all the way to hwy 60, turn left,'+
                    'and drive for a mile and it is on the right</p>' +
                    '<p>Zoom in and use street view to help seen turn</p>' +
                    '</div>'+
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                var marker = new google.maps.Marker({
                    position: lyons,
                    map: map,
                    title: 'Hello World!'
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
                clearInterval(initMap);
            }
        }
    },
    view: function(ctrl) {
        return m("div", [
            menu,
            mobileMenu,
            m("div.hero-section.wedding-hero", [
                m("h1", "Wedding Day Information")
            ]),
            m("main.main-border-wedding-details", [
                m("div.main-section", [
                    m("div.info-section", [
                        m("div.info-item", [
                            m("div.details", [
                                m("h1", "Address and Time"),
                                m("p", "4121 Ute Highway, Lyons, CO 80540. Cermony starts at 4pm and reception to follow"),
                                m("h1", "Curtiousy and Reminders"),
                                m("p", "The whole event will be outdoors, please dress nice but remeber the weather can change quickly, refer to the Boulder Info page for weather information. We ask that you leave childern at home with a sitter and enjoy date night.  Out of town guests are welcome to bring your kids")
                            ]),
                        ]),
                        m("div.info-item", [
                            console.log(ctrl.map),
                            m("div#map.map", {config: ctrl.map})
                        ]),
                    ]),
                    m("div.second-section", [
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/amanda.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Gettin married right after this"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Main of Honor: Amanda"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/ryan.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Straight outta Monte Vista"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Best Man: Ryan"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/bailey.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Gonna be a momma"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Bridesmaid: Bailey"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/ty.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Mucho take it easy"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Groomsman: Ty"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/aracely.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Weeeee!"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Bridesmaid: Aracely"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/chase.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Hazaah!"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("h1", "Groomsman: Chase"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
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

module.exports = weddingDetails;