var m = require("mithril");

var menu = {
	view: function() {
		return m("header.desktop-nav", [
			item("Wedding", "/wedding-details"),
			item("Boulder", "/boulder-info"),
			item("Flower Wedding", "/"),
			item("Registry", "/registry"),
			item("RSVP", "/rsvp")
		]);
		function item(name, route) {
			var isCurrent = (m.route() === route);
			var click = function(){ 
				m.route(route); 
			};
			return m("div.header-item" +(isCurrent ? ".active-route" : ""), {onclick: click}, name);
		}
	}
}

function persistent(context) {
    context.retain = true
}

module.exports = menu;