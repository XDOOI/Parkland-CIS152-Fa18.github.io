// JavaScript Document
$(document).ready(function() {
	"use strict";
	$("#news").validate({
		errorElement: 'label',
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: "This field is required",
				email: "You must input a well-formed email address"
			}
		}
	});
	$("#contact").validate({
		errorElement: 'label',
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			feedback: "required"
		},
		messages: {
			name: "This field is required",
			email: {
				required: "This field is required",
				email: "You must input a well-formed email address"
			},
			feedback: "This field is required"
		}
	});
});