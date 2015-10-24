var m = require('mithril'),
	Home = require('./home.js'),
	Party = require('./party.js'),
	Rsvp = require('./rsvp'),
	Registry = require('./registry'),
	Event = require('./event.js'),
	menu = require('./menu.js'),
	footer = require('./footer.js');

m.route.mode = "hash"

m.route(document.body, "/", {
    "/": Home,
    "/wedding-party": Party,
    "/rsvp": Rsvp,
    "/registry": Registry,
    "/event-info": Event
})