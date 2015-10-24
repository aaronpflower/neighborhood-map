var m = require('mithril'),
	menu = require('./menu.js'),
	footer = require('./footer.js');

var Registry = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            m("h1", "Registry"),
            footer()
        ])
    }
}

module.exports = Registry;