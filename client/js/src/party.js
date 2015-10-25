var m = require('mithril'),
	menu = require('./menu.js'),
	footer = require('./footer.js');

var Party = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            m("main", [
                m("div", {class: "hero-section"}, [
                    m("h1", "Wedding Party")
                ]),
                footer()
            ])
        ])
    }
}

module.exports = Party;