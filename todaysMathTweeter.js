var T = require('twit');
var twitterApiConf = require(process.env.TMT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./src/tweeter');
var noget = require('noget/src/translator');
var date = new Date();
var day = date.getDate();
var dateStr = (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear());
var hourMath = date.getHours() + ':' + date.getMinutes() + '. The hour is: ' + noget.doTheMathOfNumber(date.getHours());
if(day === date.getHours()) {
	hourMath = date.getHours() + ':' + date.getMinutes() + '. The hour is: ' + noget.doTheMathOfNumber(date.getHours()).toUpperCase();
}
var hashtags = day % 2 == 0 ? '#todaysMathematics #suprememathematics' : '#todaysMath #supremealphabet';
tweeter.tweet(dateStr + '. Today\'s mathematics is:\n\n' +  noget.toTodaysMath().toUpperCase() + '\n\n' + hourMath + '\n' + hashtags);

