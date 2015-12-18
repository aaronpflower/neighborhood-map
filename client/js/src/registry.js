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
                    m("div.registry", [
                        m("div.registry-item-image", [
                            m("img", {src: "../../../client/img/honeyfund_logo.svg"})
                        ]),
                        m("div.registry-item-content", [
                            m("div.registry-text", [
                                m("h1", "Honey Fund"),
                                m("p", "Help us with our Honey Mood"),
                                m("a[href='http://www.crateandbarrel.com/gift-registry/brittney-richter-and-aaron-flower/r5433020'] [target='blank']", [
                                    m("button.step-inverse-button", "Go to it") 
                                ])
                            ])
                        ])
                    ]),
                    m("div#crateBarrel.registry", [
                        m("div.registry-item-image", [
                            m("img", {src: "../../../client/img/CrateandBarrelLogo.svg"})
                        ]),
                        m("div.registry-item-content", [
                            m("div.registry-text", [
                                m("h1", "Crate and Barrel"),
                                m("p", "We need stuff for our aptarment"),
                                m("a[href='http://www.crateandbarrel.com/gift-registry/brittney-richter-and-aaron-flower/r5433020'] [target='blank']", [
                                    m("button.step-inverse-button", "Go to it") 
                                ])                           
                            ])
                        ])
                    ]),
                    m("div.registry", [
                        m("div.registry-item-image", [
                            m("img", {src: "../../../client/img/target-logo.svg"})
                        ]),
                        m("div.registry-item-content", [
                            m("div.about-us-text", [
                                m("h1", "Target"),
                                m("p", "Target Stuff"),
                                m("a[href='http://www.crateandbarrel.com/gift-registry/brittney-richter-and-aaron-flower/r5433020'] [target='blank']", [
                                    m("button.step-inverse-button", "Go to it") 
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