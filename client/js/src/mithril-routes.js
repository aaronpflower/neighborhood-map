var m = require('mithril');
	Home = require('./home.js'),
	WeddingDetails = require('./wedding-details.js'),
	Rsvp = require('./rsvp'),
	Registry = require('./registry'),
	BoulderInfo = require('./boulder-info.js'),
	menu = require('./menu.js'),
	footer = require('./footer.js'),

m.route.mode = "hash"

m.route(document.body, "/", {
    "/": Home,
    "/wedding-details": WeddingDetails,
    "/rsvp": Rsvp,
    "/registry": Registry,
    "/boulder-info": BoulderInfo,
})



// Seinfield App Practice
