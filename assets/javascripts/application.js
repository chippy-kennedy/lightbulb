#= require 'jquery-3.1.1.slim.min'
#= require 'tether.min.js'
#= require 'bootstrap.js'
#= require 'bootstrap.min.js'
#= require 'typed.min.js'
#= require_tree ./
#= require_self

$(document).ready(function() {

	$("#js-rotating-1").typed({
			strings: ["Tools^10000", "Expertise^10800", "Skills^10000", "Network^10000", "Software^10000", "Database Architecture^10000", "Developers^11200", "Design Team^10000", "Web Architecture^10000", "Wordpress^10200", "Ruby^10200", "Python^10000", "Lean Management^10000", "Knowledge^11000"],
			typeSpeed: 100,
			backSpeed: 100,
			showCursor:false,
			loop: true
	});
	$("#js-rotating-2").typed({
			strings: ["Big^10400", "World Changing^10000", "Revolutionary^10000", "Creative^10200", "Exciting^10000", "Paradigm-Shifting^10800", "Ground-Breaking^10000", "Disruptive^10200", "Fantastic^11400", "Innovative^10000", "Great^10200", "Passionate^11000", "History-Making^10000"],
			typeSpeed: 100,
			backSpeed: 100,
			showCursor:false,
			loop: true
	});

});
