#= require 'jquery-3.1.1.slim.min'
#= require 'tether.min.js'
#= require 'bootstrap.js'
#= require 'bootstrap.min.js'
#= require 'jquery.fullPage.min.js'
#= require 'morphext.js'
#= require_tree ./
#= require_self

$(document).ready(function() {

	$("#js-rotating-1").Morphext({
			// The [in] animation type. Refer to Animate.css for a list of available animations.
			animation: "bounceIn",
			// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
			separator: ",",
			// The delay between the changing of each phrase in milliseconds.
			speed: 2000,
			complete: function () {
					// Called after the entrance animation is executed.
			}
	});

	$("#js-rotating-2").Morphext({
			// The [in] animation type. Refer to Animate.css for a list of available animations.
			animation: "bounceIn",
			// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
			separator: ",",
			// The delay between the changing of each phrase in milliseconds.
			speed: 2000,
			complete: function () {
					// Called after the entrance animation is executed.
			}
	});

	$('#fullpage').fullpage({

		//Section Anchors
		anchors:['firstPage', 'secondPage', 'thirdPage'],

		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 900,
		responsiveHeight: 0,
		responsiveSlides: false,

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

	});

	$('#scrollUpButton').click(function(){
			$.fn.fullpage.moveSectionUp();
	});

	$('#scrollDownButton').click(function(){
			$.fn.fullpage.moveSectionDown();
	});
});
