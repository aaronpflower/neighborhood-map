var m = require('mithril');

var mobileMenu = {
	controller: function() {
		this.click = function(){
			var opened = document.getElementById('slide-out').classList.contains("menu-opened");
				menuToggle = document.getElementById("menu-toggle");
			if(opened){
				close = document.getElementById("slide-out").className = "menu-closed";
				menuToggle.addEventListener("click", close);
			}
			else {
				open = document.getElementById("slide-out").className = "menu-opened";
				menuToggle.addEventListener("click", open);
			}
		}
	},
	view: function(ctrl) {
		return m("header", {class: "mobile-menu"}, [
			m("div", {class: "mobile-header"}, [
				m("a[href='/']", {config: m.route}, [
					m("div", {class: "mobile-header-item"}, "#happliyeverflower")
				]),
				m("a[href='#'", [
					m("div#menu-toggle.mobile-header-item", {onclick: ctrl.click}, "X")
				])
			]),
			m("div#slide-out.menu-closed", [
				m("a[href='/wedding-details']", {config: m.route}, [
					m("div", {class: "slide-out-item"}, "Wedding Day")
				]),
				m("a[href='/boulder-info']", {config: m.route}, [
					m("div", {class: "slide-out-item"}, "Traveling to Boulder")
				]),
				m("a[href='/registry']", {config: m.route}, [
					m("div", {class: "slide-out-item"}, "Our Registry")
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