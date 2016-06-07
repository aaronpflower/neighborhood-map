var m = require('mithril');

var mobileMenu = {
	controller: function() {
		var keys = {
		    37: 1,
		    38: 1,
		    39: 1,
		    40: 1
		}; 
		function preventDefault(e) {
          e = e || window.event;
          if (e.preventDefault)
              e.preventDefault();
          e.returnValue = false;  
        }

        function preventDefaultForScrollKeys(e) {
          if (keys[e.keyCode]) {
            preventDefaultScroll(e);
          }
          return false;
        }

        function disableScroll() {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            }
            window.onwheel = preventDefault;
            window.onmousewheel = document.onmousewheel = preventDefault;
            window.ontouchmove = preventDefault;
            document.onkeydown = preventDefaultForScrollKeys;
            return;
        }

        function enableScroll() {
            if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            }
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
            return;
        }
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
					m("div#menu-toggle.mobile-header-item", {onclick: ctrl.click}, [
						m("img", {src: "/img/menu.svg"})
					]),
				]),
			]),
			m("div#slide-out.menu-closed", [
				m("a.slide-out-item[href='/wedding-details']", {config: m.route}, [
					m("div", "Wedding Day")
				]),
				m("a.slide-out-item[href='/boulder-info']", {config: m.route}, [
					m("div", "Traveling to Boulder")
				]),
				m("a.slide-out-item[href='/registry']", {config: m.route}, [
					m("div", "Our Registry")
				]),
				m("a.slide-out-item[href='/rsvp']", {config: m.route}, [
					m("div", "RSVP")
				])
			])
		]);
	}
}

function persistent(context) {
    context.retain = true
}

module.exports = mobileMenu;