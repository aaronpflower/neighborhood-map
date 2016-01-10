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
            m("div.hero-wrapper.registry-hero", [
                m("div.hero-content", [
                    m("h1", "Registry Information")
                ])
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
                                m("p", "Help us enjoy our first week of marriage in style."),
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
                                m("p", "Help us equip our new kitchen and home."),
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
                                m("p", "Help us equip our new kitchen and home."),
                                m("a[href='https://www-secure.target.com/gift-registry/giftgiver?registryId=GzXw_J9o0a2iZ9b2AmXBhg&registryType=WEDDING'] [target='blank']", [
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