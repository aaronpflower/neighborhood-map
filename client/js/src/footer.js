var m = require("mithril");

var footer = function() {
	return m("footer", {class: "footer"}, [
		m("div", {class: "footer-col-1"}, [
			m("div", {class: "col-1-left"}, [
				m("p", "Hallelujah! For the Lord our God the Almighty reigns. Let us rejoice and exult and give him the glory, for the marriage of the Lamb has come, and his Bride has made herself ready; it was granted her to clothe herself with fine linen, bright and pure for the fine linen is the righteous deeds of the saints. Revelation 19:6-8"),
			]),
			m("div", {class: "col-2-right"}, [
				m("button", {class: "button"}, "RSVP")
			])
		]),
		m("div", {class: "footer-col-2"}, [
			m("div", {class: "col-2-left"}, [
				m("button", {class: "button"}, "Party")
			]),
			m("div", {class: "col-2-middle"}, [
				m("button", {class: "button"}, "Event")
			]),
			m("div", {class: "col-2-right"}, [
				m("button", {class: "button"}, "Registry")
			])
		]),
		m("div", {class: "footer-col-3"}, [
			m("div", {class: "col-3-right"}, [
				m("p", "Site Designed by Brittney Flower & Developed by Aaron Flower")
			])
		])
	]) 
}

module.exports = footer;