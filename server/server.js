Meteor.startup(function() {
  
});
/*
// Define the function(s) we wish to call

var submitTweet = function(textToStore) {
  
  
  TweetsCollection.insert({
    createdAt: new Date().getTime(),
    tweetText: textToStore
  });
}

// Add function(s) to a dictionary
var serverMethods = {submitTweetOnServer: submitTweet};

// Tell Meteor which function(s) we plan on calling on the client
Meteor.methods(serverMethods);
*/
// Find and return the latest tweets
var tweetPublishingFunction = function() {
  return TweetsCollection.find();
}

// Pass publish function to publish command
Meteor.publish('tweetPublication', tweetPublishingFunction);

