Template.createEvent.events({
	'click .back.btn': function(e) {
		e.preventDefault();
		history.back();
	}
});

Template.eventForm.events({
	'submit .new-event-form': function(e) {
		e.preventDefault();
		var dataArr = $(e.currentTarget).serializeArray();
		var data = {};

		_.each(dataArr, function(el) {
			data[el.name] = el.value;
		});

		if (this._id) {
			var self = this;
			Events.update(this._id, {$set: data}, {}, function(err) {
				if (err) {
					console.error(err);
				} else {
					Router.go('event', {_id: self._id});
				}
			});
		} else {
			Events.insert(data, function(err, id) {
				if (err) {
					console.error(err);
				} else {
					Router.go('event', {_id: id});
				}
			});
		}
	}
});
