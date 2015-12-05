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
                    m("div.step-section", [
                        m("h1", "How to RSVP"),
                        m("h2", "Paperless Post"),
                        m("div.step", [
                            m("div.step-left", [
                                m("p", "Recommended. Cheap on our end, quicker response.  Plus it's 2015 you are on your computer all the time.")
                            ]),
                            m("div.step-right", [
                                m("a[href='#']", [
                                    m("button.step-button", "RSVP Here")
                                ]),
                            ]),
                        ]),
                        m("img", {src: "../../../client/img/down-arrow.svg"}),
                        m("h2", "Snail Mail"),
                        m("div.step", [
                            m("div.step-left", [
                                m("p", "If you insist please return the to the address ASAP"),
                            ]),
                            m("div.step-right", [
                                m("a[href='https://www.youtube.com/watch?v=GaoLU6zKaws']", [
                                    m("button.step-button", "Click Here")
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