var $ = require('jquery'),
	m = require('mithril');
	
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.hero-wrapper').css({
        'opacity': ((height - scrollTop) / height)
    });
});


