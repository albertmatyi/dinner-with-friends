Template.event.events({
    'click .back.btn': function(e) {
        e.preventDefault();
        history.back();
    }
});

Template.event.helpers({
    'formatTime': function(time) {
        return moment(time).format("YYYY-MM-DD");
    }
});