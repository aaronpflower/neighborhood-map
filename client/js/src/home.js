var m = require("mithril"),
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js"),
	footer = require("./footer.js"),
	countDownTimer = require('./widgets/timer.js');

var Home = {
    controller: function() {},
    view: function() {
        return m("div", [
            menu(),
            mobileMenu(),
            m("main", [
            	m("div", {class: "hero-section drop-shadow"}, [
    				m("h1", "Not that we are counting..."),
                    countDownTimer
            	]),
            	m("div", {class: "second-section"}, [
            		m("div", {class: "text-row"}, [
            			m("h1", "About Us")
           			]),
            		m("div", {class: "about-us"}, [
            			m("div", {class: "left-section"}, [
            				m("img", {src: "../../../client/img/brittney-home.jpg"}),
            			]),
            			m("div", {class: "right-section"}, [
            				m("h1", "Brittney"),
            				m("p", "She is Cool. From Mount Vernon, WWU Grad, CU DENVER Grad, and a Masters in Child Development.")
            			])
            		]),
            		m("div", {class: "about-us"}, [
            			m("div", {class: "right-section"}, [
            				m("h1", "Aaron"),
            				m("p", "He is cool. From South Haven, WSC Grad, degree in Exercise, some church leadership training working as a Web Devloper")
            			]),
            			m("div", {class: "left-section"}, [
            				m("img", {src: "../../../client/img/aaron-home.jpg"}),
            			]),
            		]),
            		m("div", {class: "text-row"}, [
            			m("h1", "How We Met")
           			]),
           			m("div", {class: "how-we-met"}, [
           				m("img", {src: "../../../client/img/ba-home.jpg"}),
           				m("h1", "It's a pretty simple story..."),
            			m("p", "Eleven months ago I sat at Ozo with my back to the door and acted busy on my computer.  It was a noble attempt to calm my nerves but my attention quickly shifted up as I saw your beautiful smile. You said “Hi,” and I said, “Hi.”  If I had some sense to what I was doing I would have offered to buy your pint glass of green tea but the minions in my head were running in circles and into one another, shouting, how did we get here?! We first met at the Hathron’s for Missional Community.  It was my first week there, and it was your last attempt at The Well.  That night we had a deep conversation that went like this:  “Hi I’m Aaron.”  “Hi, I’m Brittney.”  After this exchange, you went home and I did what any wise man would do, I added you on facebook.  Over the next week and a half I stated my intentions in a very clear and forward manner, that was, I liked a couple of your facebook posts, which lead to the natural next step, I personal facebook message.  Many message exchanges quickly followed but we made sure to give it at least 5 minutes in-between replies that way the other person didn’t know we were too interested.  We ended the initial back and forth with “see you at church tomorrow.”   This technically did happen but apparently you want to showed off your speed by running (maybe to impress me because I was a runner?) out the door before I could even say “Hi.”  But you couldn’t get rid of me, we had several, ok we talked pretty much nonstop for the next day on facebook, which felt like forever for you since the one thing you wanted me to ask you for I didn’t.  Eventually, a day later, I asked for your number and we found ourselves at Ozo. In the weeks that followed we would watch hours on hours of netflix and youtube while stuffing our faces with cereal.  I learned about artisanal ice, you got to see the murder house, I ate 1 slider and you grabbed my hand.  I had the best kiss I had ever had, you possibly had your worse.  We made our dating relationship official at Chipotle, and for the first time you were speechless.")
            		]),
            	]),
            ]),
            footer()
        ])
    }
};

module.exports = Home;