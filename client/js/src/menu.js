var m = require("mithril");

var menu = {
	view: function() {
		return m("header.desktop-nav", [
			item("RSVP", "/rsvp"),
			item("Traveling to Boulder", "/boulder-info"),
			item("#happliyeverflower", "/"),
			item("Wedding Day", "/wedding-details"),
			item("Our Registry", "/registry")
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