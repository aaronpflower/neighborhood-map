var m = require("mithril");

var footer = function() {
	return m("footer", [
		m("div", {class: "footer-col-3"}, [
			m("div", {class: "col-3-item"}, [
				m("p", "Site Designed & Developed by Aaron Flower.  Copy written by Brittney Flower.")
			])
		])
	]) 
}

module.exports = footer;



