TweetsCollection = new Mongo.Collection('tweets');

/*
Meteor.methods({
  submitTweetOnServer: function(textToStore) {
    
    TweetsCollection.insert({
      tweetText: textToStore,
      createdAt: new Date().getTime(),
      author: Meteor.user().emails[0].address,
      user: Meteor.userId()
    });
  }
});

*/
