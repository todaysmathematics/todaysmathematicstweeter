var T = require('twit');
var twitterApiConf = require(process.env.TMT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./src/tweeter');
var noget = require('noget/src/translator');

var date = new Date();
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var day = ("0" + date.getDate()).slice(-2);
var longdate = day % 2 == 1 ? date.getFullYear() + '' + month + '' + day : month + '' + day + '' + date.getFullYear();
longdate = parseInt(longdate, 10);

var intro = day % 2 == 0 ? 'Do the knowledge.' : 'Add on.';
var hashtags = '#meditate';
var math = noget.doTheMathOfNumber(longdate);

tweeter.tweet(intro + ' - ' + longdate + '\n' + math  + '\n' + hashtags);

