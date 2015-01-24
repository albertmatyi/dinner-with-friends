Template.createEvent.events({
	'click .back.btn': function(e) {
		e.preventDefault();
		history.back();
	}
});
