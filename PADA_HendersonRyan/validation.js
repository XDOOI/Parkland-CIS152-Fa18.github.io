$(document).ready(function() {
	"use strict";
	$("#contactForm").validate({
		rules: {
			name: {
				required: true
			},
			os: {
				required: true
			}
		},
		messages: {
			name: {
				required: "You must enter your name"
			},
			os: {
				required: "You must select an operating system"
			}
		}
	});
});