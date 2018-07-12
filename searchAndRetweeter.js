var T = require('twit');
var twitterApiConf = require(process.env.TMT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');


	
tweeter.searchAndRetweet("'today's mathematics' supreme");
tweeter.searchAndRetweet("'today's math' supreme");
tweeter.searchAndRetweet("%23todaysmath");
tweeter.searchAndRetweet("%23todaysmathematics");

