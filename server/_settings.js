// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined')
  Meteor.settings = {};

_.defaults(Meteor.settings, {
  twitter: {
    consumerKey: "PLfrg2bUh0oL0asi3R2fumRjm", 
    secret: "sRI8rnwO3sx7xUAxNWTX0WEDWph3WEBHu6tTdJYQ5wVrJeVCCt"
  },
  facebook: {
    appId: '1411768972449820',
    secret: 'cb0d00b6f87af6369ce94b24e7d97981'
  },
  public: {
    facebook: {
      permissions: [
          "basic_info",
          "user_interests",
          "user_activities",
          "read_friendlists"
      ],
      profileFields: [
          "name",
          "gender",
          "location"
      ]
    }
  }
});

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: Meteor.settings.twitter.consumerKey,
      secret: Meteor.settings.twitter.secret
    }
  }
);

ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: Meteor.settings.facebook.appId,
        secret: Meteor.settings.facebook.secret
      }
    }
);
