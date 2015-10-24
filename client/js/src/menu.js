var m = require("mithril");

var menu = function() {
	return m("header", {class: "header"}, [
		m("a[href='/wedding-party']", {config: m.route, persistent}, [
			m("div", {class: "header-item"}, "Party")
		]),
		m("a[href='/event-info']", {config: m.route, persistent}, [
			m("div", {class: "header-item"}, "Event")
		]),
		m("a[href='/']", {config: m.route, persistent}, [
			m("div", {class: "header-item"}, "Flower Wedding")
		]),
		m("a[href='/registry']", {config: m.route, persistent}, [
			m("div", {class: "header-item"}, "Registry")
		]),
		m("a[href='/rsvp']", {config: m.route, persistent}, [
			m("div", {class: "header-item"}, "RSPV")
		]),
	]);
}

function persistent(context) {
    context.retain = true
}

module.exports = menu;

// 	open = function() {
// 		var mobileMenu = document.getElementById("mobileMenu");
// 	};
// // offCanvas = function() {
// 			return m("div", {class: "mobileMenu"}, {id: "mobileMenu"}, [
// 			 	m("ul", [
// 			 		m("a[href='/wedding-party']", {config: m.route, persistent}, [
// 						m("li", {class: "mobile-item"}, "Wedding Party")
// 					]),
// 					m("a[href='/event-info']", {config: m.route, persistent}, [
// 						m("li", {class: "mobile-item"}, "Event Info")
// 					]),
// 					m("a[href='/registry']", {config: m.route, persistent}, [
// 						m("li", {class: "mobile-item"}, "Gift Registry")
// 					]),
// 					m("a[href='/rsvp']", {config: m.route, persistent}, [
// 						m("div", {class: "mobile-item"}, "RSPV Info")
// 					])
//  				])
// 			])
// 		}		

// $(document).ready(function() {
    
//     //get collection for mobile nav funcs
//     var $mobileNavCollection = $('#mobileNavigation .collection');

//     // create menu variables
//     var $sidecarNav = $('#sidecarNav');
//     var sidecarNavHeight = $('#sidecarNav').height();

//     $("#mobileNavOpen").on("click", function() {
//         event.preventDefault();

//         //toggle open class
//         $sidecarNav.toggleClass("open");

//         //slide menu
//         if ($sidecarNav.hasClass("open")) {
//             $sidecarNav.animate({
//                 top: "105px"
//             });
//         } else {
//             $mobileNavCollection.removeClass('mobile-collection-hover');
//             $mobileNavCollection.css({"height": "14.4%", "padding": "8% 5%"});
//             $sidecarNav.animate({
//                 top: -sidecarNavHeight
//             }, 250);
//         }
//     });