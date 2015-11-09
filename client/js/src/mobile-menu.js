var m = require('mithril');

var mobileMenu = {
	controller: function() {
		this.click = function(){
			var closed = document.getElementById('slide-out').className = "menu-close",
				menuToggle = document.getElementById("menu-toggle");
			if(closed){
				slideOut = document.getElementById("slide-out").className += " menu-open";
				menuToggle.addEventListener("click", slideOut);	
			} else {
				remove = document.getElementById("slide-out").className = "menu-close";
				menuToggle.addEventListener("click", remove);
			}
		}
	},
	view: function(ctrl) {
		return m("header", {class: "mobile-menu"}, [
			m("div", {class: "mobile-header"}, [
				m("a[href='/']", {config: m.route}, [
					m("div", {class: "mobile-header-item"}, "Flower Wedding")
				]),
				m("a[href='#'", [
					m("div#menu-toggle.mobile-header-item", {onclick: ctrl.click}, "X")
				])
			]),
			m("div#slide-out.menu-close", [
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
}

function persistent(context) {
    context.retain = true
}

module.exports = mobileMenu;