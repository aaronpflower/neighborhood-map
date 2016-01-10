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
            m("div.hero-wrapper.wedding-hero", [
                m("div.hero-content", [
                    m("h1", "Wedding Day Information")
                ])
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
                                    m("h1", "Teaches, name, Amanda and Maid of Honor.")
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Boo, or Booski")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Once upon a time")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Reeses puffs")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Otter, they are fun and fluffy and adorable, and they spend their lives in the water")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Brittney?"),
                                        m("p", "Same program, and roomies and besties from junior year on!")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Brittney first tell you about Aaron?"),
                                        m("p", "That she liked this guy, he was totally her type, a shy, soft spoken, sweet and nerdy (in the best way) ginger guy.")
                                    ])
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/ryan.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Straight outta Monte Vista, Ryan and Best Man."),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Ry-NO!")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Aaron Flower")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Special K")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Cat because I love cats")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Aaron?"),
                                        m("p", "Roomate for the last 1000 years.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Aaron first tell you about Brittney?"),
                                        m("p", "Gonna marry her.")
                                    ])
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/bailey.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Another teacher, Bailey, and bridesmaid.")
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Boo, or Booski")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Once upon a time")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Reeses puffs")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Otter, they are fun and fluffy and adorable, and they spend their lives in the water")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Brittney?"),
                                        m("p", "Same program, and roomies and besties from junior year on!")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Brittney first tell you about Aaron?"),
                                        m("p", "That she liked this guy, he was totally her type, a shy, soft spoken, sweet and nerdy (in the best way) ginger guy.")
                                    ])
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/ty.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Ty, Groomsman. Mucho take it easy."),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Ty Daddy Dollars")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Reggae Music")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Golden Grahams")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Killer Whale bc I love Free Willy and Orcas are bad ass. They kill Great Whites.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Aaron?"),
                                        m("p", "Met Aaron through Ryan right when I moved to Boulder in Aug. 2013. Been close since.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Aaron first tell you about Brittney?"),
                                        m("p", "Aaron first told me about Brittany by saying (with 3% enthusiasm, standard Aaron inflection...) 'So...I met a girl.'")
                                    ])
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/aracely.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Bridesmaid, Aracely. Weeeee!"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                 m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Cely, Chely")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Taylor Swift...shhhhhh <--- Who isn't? signed Aaron.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Honey Nut Cheerios")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Wolf because they are loyal, intelligent and a protector")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Brittney?"),
                                        m("p", "Freshman year of HS when we took body shaping class & bonded over eye liner in the locker room.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Brittney first tell you about Aaron?"),
                                        m("p", "She mentioned a guy who she met at church who friended her on FB and creeped on her. Naturally, I asked for his name & creeped on him for her!")
                                    ])
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div.about-us-item", [
                                m("img", {src: "../../../client/img/chase.jpg"}),
                                m("div.overlay", [
                                    m("h1", "Chase, groomsman. Hazaah!"),
                                ]),
                            ]),
                            m("div.about-us-item", [
                                m("div.about-party", [
                                    m("div.about-party-item", [
                                        m("p", "What was your childhood nickname?"),
                                        m("p", "Chase")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What, or who, are you a “closet” fan of?"),
                                        m("p", "Taylor Swift. <--- Told ya, Aaron. She is great.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What is your favorite cereal?"),
                                        m("p", "Cracklin’ Oat Bran")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "If you could be any animal which one would you prefer to be and why?"),
                                        m("p", "Cheetah, cause they’re the fastest.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "How did you meet and become friends with Aaron?"),
                                        m("p", "I met Aaron in Gunnison through church.")
                                    ]),
                                    m("div.about-party-item", [
                                        m("p", "What did Aaron first tell you about Brittney?"),
                                        m("p", "She talks a lot.")
                                    ])
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