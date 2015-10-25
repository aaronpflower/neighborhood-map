var m = require('mithril'),
	menu = require('./menu.js'),
	footer = require('./footer.js');

var Registry = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            m("main", [
                m("div", {class: "hero-section"}, [
                    m("h1", "Registry Info")
                ]),
                footer()
            ])
        ])
    }
}

module.exports = Registry;