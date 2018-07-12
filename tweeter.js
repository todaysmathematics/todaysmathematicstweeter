var T = require('twit');
var twitterApiConf = require(process.env.TMT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);

tweet = function(message) {
	twitter.post('statuses/update', { status: message }, function(err, data, response) {
		console.log('tweeted: ' + message);
	});
};

retweet = function(tweetId) {
	twitter.post('statuses/retweet/' + tweetId,  function(err, data, response) {
		console.log(data);
	});
};

search = function(searchQuery) {
	twitter.get('search/tweets', { q: searchQuery }, function(err, data, response) {
		console.log(data);
	});
};

searchAndRetweet = function(searchQuery) {
	twitter.get('search/tweets', { q: searchQuery }, function(err, data, response) {
		var firstStatus = data.statuses[0];
		if(firstStatus) {
			retweet(firstStatus.id_str);
		}
		else {
			console.log('nothing to retweet for search query: ' + searchQuery);
		}
	});
};

module.exports.tweet = tweet;
module.exports.retweet = retweet;
module.exports.search = search;
module.exports.searchAndRetweet = searchAndRetweet;

