var m = require("mithril");

var footer = function() {
	return m("footer", [
		// m("div", {class: "footer-col-1"}, [
		// 	m("div", {class: "col-1-left"}, [
		// 		m("p", "Hallelujah! For the Lord our God the Almighty reigns. Let us rejoice and exult and give him the glory, for the marriage of the Lamb has come, and his Bride has made herself ready; it was granted her to clothe herself with fine linen, bright and pure for the fine linen is the righteous deeds of the saints. Revelation 19:6-8"),
		// 	]),
		// 	// m("div", {class: "col-1-right"}, [
		// 	// 	m("a[href='/rsvp']", {config: m.route}, [
		// 	// 		m("button", {class: "footer-button"}, "RSVP")
		// 	// 	]),
		// 	// ])
		// ]),
		// m("div", {class: "footer-col-2"}, [
		// 	m("div", {class: "col-2-item"}, [
		// 		m("a[href='/wedding-day']", {config: m.route}, [
		// 			m("button", {class: "footer-button"}, "Wedding")
		// 		])
		// 	]),
		// 	m("div", {class: "col-2-item"}, [
		// 		m("a[href='/boulder-info']", {config: m.route}, [
		// 			m("button", {class: "footer-button"}, "Boulder")
		// 		])
		// 	]),
		// 	m("div", {class: "col-2-item"}, [
		// 		m("a[href='/registry']", {config: m.route}, [
		// 			m("button", {class: "footer-button"}, "Registry")
		// 		])
		// 	])
		// ]),
		m("div", {class: "footer-col-3"}, [
			m("div", {class: "col-3-item"}, [
				m("p", "Site Designed & Developed by Aaron Flower.  Copy written by Brittney Flower.")
			])
		])
	]) 
}

module.exports = footer;



