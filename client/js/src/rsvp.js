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
            m("div.hero-wrapper.rsvp-hero", [
                m("div.hero-content", [
                    m("p", "RSVP")
                ])
            ]),
            m("main.main-border-rsvp", [
                m("div.main-section", [
                    m("div.step-section", [
                        m("div.step", [
                            m("h2", "Paperless Post"),
                            m("div.step-left", [
                                m("p", "Recommended. Cheap on our end, quicker response.  Plus it's 2015 you are on your computer all the time.")
                            ]),
                            m("div.step-right", [
                                m("a[href='#'] [target='blank']", [
                                    m("button.button", "RSVP Here")
                                ]),
                            ]),
                        ]),
                        m("div.step-inverse", [
                            m("h2", "Snail Mail"),
                            m("div.step-left", [
                                m("p", "If you insist please return the to the address ASAP"),
                            ]),
                            m("div.step-right", [
                                m("a[href='https://www.youtube.com/watch?v=GaoLU6zKaws'] [target='blank']", [
                                    m("button.button", "Click Here")
                                ]),
                            ]),
                        ]),
                    ])
                ]),  
            footer(),
            ])
        ])
    }
}

module.exports = Rsvp;