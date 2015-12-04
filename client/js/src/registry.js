var m = require('mithril'),
	menu = require('./menu.js'),
    mobileMenu = require("./mobile-menu.js"),
	footer = require('./footer.js');

var Registry = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu,
            mobileMenu,
            m("div", {class: "hero-section registry-hero"}, [
                m("h1", "Registry Information")
            ]),
            m("main.main-border-registry", [
                m("div.main-section", [
                    m("div", {class: "text-row"}, [
                        m("h1", "We have two options")
                    ]),
                    m("div.about-us", [
                        m("div", {class: "about-us-item"}, [
                            m("img", {src: "../../../client/img/Crate-Barrel-Logo.jpg"})
                        ]),
                        m("div", {class: "about-us-item"}, [
                            m("div.about-us-text", [
                                m("h1", "Crate and Barrel"),
                                m("p", "We need stuff for our aptarment"),
                                m("a[href='http://www.crateandbarrel.com/gift-registry/brittney-richter-and-aaron-flower/r5433020']", [
                                    m("button", "Go to it") 
                                ])                           
                            ])
                        ])
                    ]),
                    m("div#aaron.about-us", [
                        m("div", {class: "about-us-item"}, [
                            m("img", {src: "../../../client/img/honeyfund_logo.jpg"})
                        ]),
                        m("div", {class: "about-us-item"}, [
                            m("div.about-us-text", [
                                m("h1", "Honey Fund"),
                                m("p", "Help us with our Honey Mood"),
                                m("a[href='http://www.crateandbarrel.com/gift-registry/brittney-richter-and-aaron-flower/r5433020']", [
                                    m("button", "Go to it") 
                                ])
                            ])
                        ])
                    ]),
                ]),  
            footer(),
            ])
        ])
    }
}

module.exports = Registry;