Events = new Mongo.Collection('events');

Events.allow({
  insert: function() {
    return true;
  }
});