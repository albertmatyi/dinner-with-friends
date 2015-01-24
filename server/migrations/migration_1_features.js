var eventData = [{
	                 title: 'dinner'
                 }, {title: 'brunch'}];

Migrations.add({
	name: 'Add features',
	version: 1,

	up: function() {
//		_.each(eventData, function(data) {
//			EventsCollection.insert(data);
//		});
	},

	down: function() {

	}
});

// Migrations.migrateTo('1,rerun');
