var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
	footer = require('./footer.js');

var weddingDetails = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu,
            mobileMenu,
            m("div.hero-section.wedding-hero.drop-shadow", [
                m("h1", "Lyons, CO"),
                m("p", "Where: Lyons Farmette"),
                m("p", "When: June 19th, 2016 4pm")
            ]),
            m("main.main-border-wedding-details", [
                m("div.main-section", [
                    m("div", {class: "text-row"}, [
                        m("h1", "Wedding Day Information")
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
                        ])
                    ]),
                    // m("div.second-section", [
                    //     m("div.text-row", [
                    //         m("h1",  "Interactive Map")
                    //     ])
                    // ]),
                    // // boulderMap,
                    m("div", {class: "second-section"}, [
                        m("div", {class: "text-row"}, [
                            m("h1", "Wedding Party")
                        ]),
                        m("div.about-us", [
                            m("div", {class: "about-us-item"}, [
                                m("img", {src: "../../../client/img/brittney-home.jpg"})
                            ]),
                            m("div", {class: "about-us-item"}, [
                                m("div.about-us-text", [
                                    m("h1", "Amanda"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div", {class: "about-us-item"}, [
                                m("img", {src: "../../../client/img/aaron-home.jpg"})
                            ]),
                            m("div", {class: "about-us-item"}, [
                                m("div.about-us-text", [
                                    m("h1", "Ryan"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div", {class: "about-us-item"}, [
                                m("img", {src: "../../../client/img/brittney-home.jpg"})
                            ]),
                            m("div", {class: "about-us-item"}, [
                                m("div.about-us-text", [
                                    m("h1", "Bailey"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div", {class: "about-us-item"}, [
                                m("img", {src: "../../../client/img/aaron-home.jpg"})
                            ]),
                            m("div", {class: "about-us-item"}, [
                                m("div.about-us-text", [
                                    m("h1", "Ty"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div.about-us", [
                            m("div", {class: "about-us-item"}, [
                                m("img", {src: "../../../client/img/brittney-home.jpg"})
                            ]),
                            m("div", {class: "about-us-item"}, [
                                m("div.about-us-text", [
                                    m("h1", "Aracely"),
                                    m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland, MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                                ])
                            ])
                        ]),
                        m("div#aaron.about-us", [
                            m("div", {class: "about-us-item"}, [
                                m("img", {src: "../../../client/img/aaron-home.jpg"})
                            ]),
                            m("div", {class: "about-us-item"}, [
                                m("div.about-us-text", [
                                    m("h1", "Chase"),
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