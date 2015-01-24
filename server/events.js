var allowInsert = function(userId, doc) {
	console.log('welcome', userId, 'you are allowed: ' + !!userId);
	return !!userId;
};
Events.allow({
	insert: allowInsert
});

Meteor.publish('event', function (id) {
    return Events.find(id);
});
