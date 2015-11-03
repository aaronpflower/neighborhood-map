var m = require("mithril");

var menu = function() {
	return m("header", {class: "desktop-nav"}, [
		m("a[href='/wedding-details']", {config: m.route}, [
			m("div", {class: "header-item"}, "Wedding")
		]),
		m("a[href='/boulder-info']", {config: m.route}, [
			m("div", {class: "header-item"}, "Boulder")
		]),
		m("a[href='/']", {config: m.route}, [
			m("div", {class: "header-item"}, "Flower Wedding")
		]),
		m("a[href='/registry']", {config: m.route}, [
			m("div", {class: "header-item"}, "Registry")
		]),
		m("a[href='/rsvp']", {config: m.route}, [
			m("div", {class: "header-item"}, "RSVP")
		]),
	]);
}

function persistent(context) {
    context.retain = true
}

module.exports = menu;