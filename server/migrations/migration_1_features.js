var eventData = [{
	                 title: 'Dinner Number One', 
	                 description: 'dinner with friends',
	                 time: new Date(2015, 0, 15, 20, 00),
	                 guestLimit: 5,
	                 address: 'Fasaneriestraße 2 80636 München'
                 },
                 {
	                 title: 'Brunch with amigos', 
	                 description: 'Come and join us in our special event where we will cook for you guys',
	                 time: new Date(2015, 1, 20, 11, 00),
	                 guestLimit: 10,
	                 address: 'Schellingstraße 56 80799 München'
                 },
                 {
	                 title: 'Breakfast for singles', 
	                 description: 'Todo bien, si claro, come and join us, we are bunch of singles looking for singles.',
	                 time: new Date(2015, 2, 20, 9, 00),
	                 guestLimit: 6,
	                 address: 'Türkenstraße 61 80799 München'
                 },
                 {
	                 title: 'Dinner with rich people', 
	                 description: 'Only rich allowed, come and join us and bring shampoos and your best clothes, otherwise you are not allowed.',
	                 time: new Date(2015, 3, 15, 20, 00),
	                 guestLimit: 5,
	                 address: 'Leopoldstraße 20 80802 München'
                 },
                 {
	                 title: 'Mexican dinner', 
	                 description: 'Enrique cooks his specialties for the guest. Guacamole number one.',
	                 time: new Date(2015, 4, 23, 19, 00),
	                 guestLimit: 10,
	                 address: 'Leopoldstraße 40 80802 München'
                 },
                 {
	                 title: 'German sausage breakfast', 
	                 description: 'Come and try the traditional weißwurst breakfast with Hanz Mustermann.',
	                 time: new Date(2015, 2, 17, 9, 00),
	                 guestLimit: 4,
	                 address: 'Leopoldstraße 80 80636 München'
                 },
                 {
	                 title: 'Italian lunch', 
	                 description: 'The mediterranean food is awesome. Get a good taste of the sicilian cuisine at my place.',
	                 time: new Date(2015, 3, 19, 14, 00),
	                 guestLimit: 20,
	                 address: 'Fasaneriestraße 20 80636 München'
                 }];

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
