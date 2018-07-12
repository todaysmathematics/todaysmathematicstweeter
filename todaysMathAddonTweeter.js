var T = require('twit');
var twitterApiConf = require(process.env.TMT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

var date = new Date();
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var day = ("0" + date.getDate()).slice(-2);
var longdate = date.getFullYear() + '' + month + '' + day;
var hashtags = '#meditate';
var intro = day % 2 == 0 ? 'Do the knowledge.' : 'Add on.';
tweeter.tweet(intro + ' - ' + longdate + ' - ' + noget.toTodaysMathAddon()  + ' - ' + hashtags);




