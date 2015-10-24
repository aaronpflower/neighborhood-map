var m = require('mithril'),
	menu = require('./menu.js'),
	footer = require('./footer.js');

var Rsvp = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            m("h1", "Rsvpwidget"),
            footer()
        ])
    }
}

module.exports = Rsvp;