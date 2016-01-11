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
                    m("h1", "How to RSVP")
                ])
            ]),
            m("main.main-border-rsvp", [
                m("div.main-section", [
                    m("div.step-section", [
                        m("div.step", [
                            m("div.step-content", [
                                m("h2", "Paperless Post"),
                                m("div.step-left", [
                                    m("p", "If you received an invitation through Paperless Post, please RSVP using the prompts provided in the invitation.")
                                ])
                            ])
                        ])      
                    ]),
                    m("div.step", [
                        m("div.step-content.last", [
                            m("h2", "Snail Mail"),
                            m("div.step-left", [
                                m("p", "If you received an invitation through the mail, please send the enclosed RSVP card using the pre-addressed envelope."),
                            ])
                        ])
                    ])
                ]),  
            footer(),
            ])
        ])
    }
}

module.exports = Rsvp;