var m = require("mithril");

var menu = function() {
	return m("header", {class: "container header"}, [
		m("a[href='/']", {config: m.route, persistent}, [
			m("div", {class: "header-item"}, "A Flower Wedding")
		]),
		m("a[href='/']", {config: m.route, persistent}, [
			m("div", {class: "header-item"}, "Open")
		])
	]);
			
	// return m("div", {class: "mobileMenu"}, {id: "mobileMenu"}, [
	// 	m("a[href='/wedding-party']", {config: m.route, persistent}, [
	// 		m("div", {class: "header-item"}, "Wedding Party")
	// 	]),
	// 	m("a[href='/event-info']", {config: m.route, persistent}, [
	// 		m("div", {class: "header-item"}, "Event Info")
	// 		]),

	// 	m("a[href='/registry']", {config: m.route, persistent}, [
	// 		m("div", {class: "header-item"}, "Gift Registry")
	// 		]),
	// 	m("a[href='/rsvp']", {config: m.route, persistent}, [
	// 		m("div", {class: "header-item"}, "RSPV Info")
	// 	])
	// ]);
}

function persistent(context) {
    context.retain = true
}

module.exports = menu;