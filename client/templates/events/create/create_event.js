Template.createEvent.events({
	'click .back.btn': function(e) {
		e.preventDefault();
		history.back();
	}
});
Template.eventForm.helpers({
	image: function() {
		return Session.get('events.new.image');
	}
});

Template.eventForm.events({
	'click .image-uploader': function() {
		MeteorCamera.getPicture({width: 320}, function(error, data) {
			if (error) {
				alert(error.reason);
			} else {
				Session.set('events.new.image', data);
			}
		});
	},
	'submit .event-form': function(e) {
		e.preventDefault();
		var dataArr = $(e.currentTarget).serializeArray();
		var data = {};

		_.each(dataArr, function(el) {
			data[el.name] = el.value;
		});
		data.image = Session.get('events.new.image');
		if (!data.title || !data.guests) {
			alert('Please specify a title and guests number.');
			return;
		}
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
