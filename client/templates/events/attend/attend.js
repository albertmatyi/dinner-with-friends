Template.eventGuests.helpers({
	canAttend: function() {
		return !this.guestList || (
			this.guestsList.length < this.guests && !_.any(
				this.guestList,
				function(el) {
					return el._id === Meteor.userId();
				}
			));
	}
});

Template.attendButton.events({
	'click .attend.btn': function() {
		var guestData = {};
		var usr = Meteor.user();
		guestData.name = usr.profile.name;
		guestData.image = usr.services.twitter.profile_image_url_https;
		guestData.created = +new Date();
		console.log(guestData);
		Events.update(this._id, {
			$push: {
				guestList: guestData
			}
		});
	}
});

Template.createEvent.helpers({
	virtEv: function() {
		Meteor.subscribe('events');
		var eventData = Events.findOne('Cbqxhga3WkYqFSr55');
		console.log(eventData);
		return eventData;
	}
});
