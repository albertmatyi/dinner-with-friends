// If the auth overlay is on the screen but the user is logged in,
//   then we have come back from the loginWithTwitter flow,
//   and the user has successfully signed in.
//
// We have to use an autorun for this as callbacks get lost in the
//   redirect flow.
Template.authOverlay.created = function() {
  this.autorun(function() {
    if (Meteor.userId() && Overlay.template() === 'authOverlay')
      Overlay.close();
  });
};

Template.authOverlay.events({
  'click .js-signin-twitter': function() {
    Meteor.loginWithTwitter({loginStyle: 'redirect'});
  },
  'click .js-signin-facebook': function() {
    Meteor.loginWithFacebook({loginStyle: 'redirect'});
  }
});