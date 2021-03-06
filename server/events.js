var allowInsert = function(userId, doc) {
	console.log('welcome', userId, 'you are allowed: ' + !!userId);
	//as a sideeffect add userId
	doc.userId = userId;
	return !!userId;
};
Events.allow({
	insert: allowInsert,
	update: function() {
		return true;
	}
});


Meteor.publish('event', function (id) {
	return Events.find(id);
});
