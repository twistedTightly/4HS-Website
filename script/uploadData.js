/* Initialize Parse */
Parse.initialize("OzWsADpYPjQNIsbrMUDIhVJOXTxSRwMIew5wZkvZ", "rNdJifpOo8ez8ZvVfhsVpSqNSLZJ4MrD9dDTL8Hl");
var Feedback = Parse.Object.extend("Feedback");

$("#feedback-form").on("submit", function(e) {
	e.preventDefault();

	var newFB = {};
	newFB.email = $("#basic-email-input").val();
	newFB.idea  = $("#basic-idea-input").val();

	saveToParse(newFB, resetForm);
});

function saveToParse(ob,successCB) {
	var fb = new Feedback();
	fb.save(ob, {
		success: function(object) {
			alert("Thank you for your interest. We look forward to working with you!");
			successCB(object);
		},
		error: function(model, error) {
			alert("There is an error.");
		}
	});
}

function resetForm() {
	$("#basic-email-input").val("");
	$("#basic-idea-input").val("");
}