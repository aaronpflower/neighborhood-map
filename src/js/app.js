var m = require('mithril'),
	Layout = require('./layout.js'),
	Home = require('./home.js'),
	WeddingDetails = require('./wedding-details.js'),
	Rsvp = require('./rsvp'),
	Registry = require('./registry'),
	BoulderInfo = require('./boulder-info.js'),
	menu = require('./menu.js'),	
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js");

m.mount(document.getElementById('menu'), m.component(menu))
m.mount(document.getElementById('mobileMenu'), m.component(mobileMenu))

m.route.mode = "hash"

m.route(document.getElementById("site-content"), "/", {
    "/": Home,
    "/wedding-details": WeddingDetails,
    "/rsvp": Rsvp,
    "/registry": Registry,
    "/boulder-info": BoulderInfo,
})