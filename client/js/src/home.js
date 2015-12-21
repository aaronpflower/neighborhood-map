var m = require("mithril"),
	menu = require("./menu.js"),
    mobileMenu = require("./mobile-menu.js"),
	footer = require("./footer.js"),
	countDownTimer = require('./widgets/timer.js');

var Home = {
    controller: function() {
        this.modal = function() {
            var modalOpened = document.getElementById('modal-content').classList.contains("bio-overlay-opened"),
                triggerOpen = document.getElementById('trigger-open'),
                triggerClose = document.getElementById('trigger-close');

            if(modalOpened){
                a = document.getElementById('modal-content').className = "bio-overlay-closed";
                triggerClose.addEventListener("click", a);
            }
            else {
                b = document.getElementById('modal-content').className = "bio-overlay-opened";
                triggerOpen.addEventListener("click", b);
            }
        }
        this.modal2 = function() {
            var modalOpened = document.getElementById('modal-content2').classList.contains("bio-overlay-opened"),
                triggerOpen = document.getElementById('trigger-open'),
                triggerClose = document.getElementById('trigger-close');

            if(modalOpened){
                a = document.getElementById('modal-content2').className = "bio-overlay-closed";
                triggerClose.addEventListener("click", a);
            }
            else {
                b = document.getElementById('modal-content2').className = "bio-overlay-opened";
                triggerOpen.addEventListener("click", b);
            }
        }
        this.modal3 = function() {
            var modalOpened = document.getElementById('modal-content3').classList.contains("bio-overlay-opened"),
                triggerOpen = document.getElementById('trigger-open'),
                triggerClose = document.getElementById('trigger-close');

            if(modalOpened){
                a = document.getElementById('modal-content3').className = "bio-overlay-closed";
                triggerClose.addEventListener("click", a);
            }
            else {
                b = document.getElementById('modal-content3').className = "bio-overlay-opened";
                triggerOpen.addEventListener("click", b);
            }
        } 
    },
    view: function(ctrl) {
        return m("div", [
            menu,
            mobileMenu,
            m("div.hero-section home-hero", [
                m("h1", "Aaron and Brittney"),
                m("h2", "June 19th, 2016"), 
                m("h2", "Lyons, CO")
            ]),
            // modal content
             m("div#modal-content.bio-overlay-closed", [
                m("div.modal", [
                    m("div.modal-text", [
                        m("div#trigger-close", {onclick: ctrl.modal}, [
                            m('img.modal-x', {src: "../../../client/img/close-icon.svg"})
                        ]),
                        m("h1", "About Brittney"),
                        m("p", "MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                        m("p", "The other 22% of Aaron’s spare time was spent sledding, roller blading (because Mighty Ducks), playing sports, and watching Sportscenter and the Weather Channel. As an adolescent, Aaron took up running. He was good at it, and ran a lot. A lot. Alot. Running brought Aaron to the mountain town of Gunnison, CO where he ran through college, and got a degree in Sports Science. It was also in Gunnison that the Lord’s pursuit of Aaron culminated in him becoming a Christian."),
                        m("p", "The Lord pushed Aaron to pursue church leadership, which brought him to an internship in Seattle, WA for a year. It was here that Aaron and Brittney cosmically attended the same Sounders FC vs. Manchester United game."), 
                        m("p", "After Seattle, Aaron felt called to move to Boulder, CO to help some of his good friends start a church. He spent three years in his personal hell as a Whole Foods employee, and by God’s grace was given an opportunity to try his hand at web development at a hip new startup in Boulder. If you want to find Aaron on any given night, if he’s not with his hottie fiancee, he can be found playing Madden with his friends Ryan and Ty. But if you’re looking for him past 9:30pm just wait until tomorrow. He’s gone to sleep because he’s so tired from being such a baller all day.") 
                    ]),
                ]), 
            ]),
             m("div#modal-content2.bio-overlay-closed", [
                m("div.modal", [
                    m("div.modal-text", [
                        m("div#trigger-lose", {onclick: ctrl.modal2}, [
                            m('img.modal-x', {src: "../../../client/img/close-icon.svg"})
                        ]),
                        m("h1", "About Aaron"),
                        m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland MI to loving parents Paul and Lori Flower. Babyhood was Aaron’s jam, and he enjoyed his frequent naps and early bedtimes. Aaron’s childhood and adolescence was marked by a natural athleticism, an admiration for snow, and an affinity for curmudgeonly behavior. It is said in Flower family lore that Aaron spent 78% of his spare time with his arms crossed in protest, which aided in the coining of his nickname “Grumpy Bunny.”"),
                        m("p", "The other 22% of Aaron’s spare time was spent sledding, roller blading (because Mighty Ducks), playing sports, and watching Sportscenter and the Weather Channel. As an adolescent, Aaron took up running. He was good at it, and ran a lot. A lot. Alot. Running brought Aaron to the mountain town of Gunnison, CO where he ran through college, and got a degree in Sports Science. It was also in Gunnison that the Lord’s pursuit of Aaron culminated in him becoming a Christian."),
                        m("p", "The Lord pushed Aaron to pursue church leadership, which brought him to an internship in Seattle, WA for a year. It was here that Aaron and Brittney cosmically attended the same Sounders FC vs. Manchester United game."), 
                        m("p", "After Seattle, Aaron felt called to move to Boulder, CO to help some of his good friends start a church. He spent three years in his personal hell as a Whole Foods employee, and by God’s grace was given an opportunity to try his hand at web development at a hip new startup in Boulder. If you want to find Aaron on any given night, if he’s not with his hottie fiancee, he can be found playing Madden with his friends Ryan and Ty. But if you’re looking for him past 9:30pm just wait until tomorrow. He’s gone to sleep because he’s so tired from being such a baller all day.") 
                    ]), 
                ]),   
            ]),
            m("div#modal-content3.bio-overlay-closed", [
                m("div.modal", [
                    m("div.modal-text", [
                        m("div#trigger-close", {onclick: ctrl.modal3}, [
                            m('img.modal-x', {src: "../../../client/img/close-icon.svg"})
                        ]),
                        m("h1", "About Us"),
                        m("p", "Brittney had recently moved to Boulder for a year-long intensive graduate program and Aaron had just quit his job at Whole Foods and started a new job at a local tech startup. While both of them were in a state of transition, God saw it fit to allow their worlds collide. Brittney who generally dislikes the act of meeting new people, had forced herself to go to a Missional Community (MC) gathering from her new church, The Well. On this particular night that she was going, Aaron’s MC was combining with that MC. That night, Aaron shirked on the other side of the house as this cute girl he had never met introduced herself to everyone. As they were sitting down to start a Bible Study, the two exchanged niceties, shook hands, and sat down. For the next hour Aaron proceeded to stare at Brittney, while Brittney wondered “Is he staring at me? Crap. Now he thinks I’m staring at him.”"),
                        m("p", "After their profoundly deep first meeting, Aaron did what any respectable man who wants to state their intentions to a lady does. He friended her on facebook. After a few exchanges on Facebook, and Brittney running away from Aaron at church, they met for coffee at Ozo Coffee. Walking into the coffee shop, Brittney took a deep breath, smiled at Aaron, and said “Aaron? Hi.” Aaron awkwardly sat in silence not knowing what to say, do, or think. But Brittney found the silence oddly calming to her nerves. After the initial awkwardness subsided, the two talked for 3 hours about their families, backgrounds, and everything in between. After finishing the last sips of their beverages, the pair walked outside of the coffee shop and awkwardly stared at each other for a second. Then Aaron looked at Brittney and said “We should do this again soon.” To which Brittney replied “Yes. I’d like that.” This was proceeded by the most awkward hug, arms tapping the others back lightly, torsos feet away from each other. After another awkward look and saying their goodbyes the two walked away from each other grinning.")
                    ]),
                ]),    
            ]),
            m("main.main-border-home", [
            	m("div.main-section", [
                    countDownTimer,
            		m("div.about-us", [
                        m("div.about-us-item", [
                            m("img", {src: "../../../client/img/brittney-home.jpg"}),
                            m("div.overlay", [
                                m("h1", "Hi"),
                            ]),
                        ]),
            			m("div.about-us-item", [
                            m("div.about-us-text", [
                                m("h1", "About Brittney"),
                                m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland"),
                                m("button#trigger-open.button", {onclick: ctrl.modal}, "Read More")
                            ]),
            			]),
            		]),
            		m("div#aaron.about-us", [
                        m("div.about-us-item", [
                            m("img", {src: "../../../client/img/aaron-home.jpg"}),
                            m("div.overlay", [
                                m("h1", "What's up?"),
                            ]),
                        ]),
            			m("div.about-us-item", [
                            m("div.about-us-text", [
                                m("h1", "About Aaron"),
                                m("p", "Aaron Paul Flower was born on beautiful spring day in the bustling metropolis of Holland"),
                                m("button#trigger-open.button", {onclick: ctrl.modal2}, "Read More")
                            ]),
            			]),
            		]),
           			m("div.how-we-met", [
                        m("div.how-we-met-img", [
                            m("img", {src: "../../../client/img/ba-home.jpg"})
                        ]),
                        m("div.about-us-text", [
                            m("h1", "How we met, well it's a pretty simple story"),
                            m("p", "Brittney had recently moved to Boulder for a year-long intensive graduate program"), 
                            m("button#trigger-open.button", {onclick: ctrl.modal3}, "Read More")
                        ]),
                    ]),
            	]),
            footer(),
            ])
        ])
    }
};

module.exports = Home;