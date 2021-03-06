var feedSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
	Meteor.subscribe('news');
	Meteor.subscribe('bookmarkCounts');
	feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
	layoutTemplate: 'appBody',
	notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
	// Keep showing the launch screen on mobile devices until we have loaded
	// the app's data
	dataReadyHold = LaunchScreen.hold();
}

HomeController = RouteController.extend({
	onBeforeAction: function() {
		Meteor.subscribe('latestActivity', function() {
			dataReadyHold.release();
		});
	}
});

FeedController = RouteController.extend({
	onBeforeAction: function() {
		this.feedSubscription = feedSubscription;
	}
});

EventsController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('events');
  }
});

BookmarksController = RouteController.extend({
	onBeforeAction: function() {
		if (Meteor.user())
			Meteor.subscribe('bookmarks');
		else
			Overlay.open('authOverlay');
	},
	data: function() {
		if (Meteor.user())
			return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
	}
});

RecipeController = RouteController.extend({
	onBeforeAction: function() {
		Meteor.subscribe('recipe', this.params.name);
	},
	data: function() {
		return RecipesData[this.params.name];
	}
});

AdminController = RouteController.extend({
	onBeforeAction: function() {
		Meteor.subscribe('news');
	}
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('feed');
  this.route('events');
	this.route('create-event', {template: 'createEvent'});
  this.route('bookmarks');
  this.route('about');
  this.route('recipe', {path: '/recipes/:name'});
  this.route('admin', { layoutTemplate: null });
	this.route('event', {
        path: 'event/:_id',
        onBeforeAction: function() {
            return Meteor.subscribe('event', this.params._id);
        },
        data: function () {
            var event = Events.findOne(this.params._id);
            return { 'event': event};
        }
    });
	this.route('bookmarks');
	this.route('about');
	this.route('recipe', {path: '/recipes/:name'});
	this.route('admin', {layoutTemplate: null});
});

Router.onBeforeAction('dataNotFound', {only: 'recipe'});
