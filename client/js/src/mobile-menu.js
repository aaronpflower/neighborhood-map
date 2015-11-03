var m = require('mithril');

var mobileMenu = function () {
	return m("header", {class: "mobile-menu"}, [
		m("a[href='/']", {config: m.route}, [
			m("div", {class: "main-item"}, "Flower Wedding")
		]),
		m("div", {class: "slide-out"}, [
			m("a[href='/wedding-details']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "Wedding")
			]),
			m("a[href='/boulder-info']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "Boulder")
			]),
			m("a[href='/registry']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "Registry")
			]),
			m("a[href='/rsvp']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "RSVP")
			])
		])
	]);
}

function persistent(context) {
    context.retain = true
}

module.exports = mobileMenu;