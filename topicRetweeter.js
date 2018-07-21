var fs = require("fs");
var tweeter = require('./src/tweeter');
var shflr = require("./src/shflr");
var topics = 'topics';
var attemptsLog = './logs/searchQueriesAttemptedToday.log';
var numRetweets = 33;
var restTime = 777;

var readSearchTermsFromFile = function() {
	var searchTerms = [];
	fs.readdirSync(topics).forEach(filename => {
		var searchTermFileContent = fs.readFileSync('./' + topics + '/' + filename, "utf8");
		var searchTermSplits = searchTermFileContent.split("\n");
		var searchTermLines = searchTermSplits.filter(term => term.trim().length > 0);
		for(let term of searchTermLines) {
			searchTerms.push(term);
		}
	});
	return searchTerms;
};

var shuffleTermsAndFireRetweets = async function(numRetweets, rest) { // ref: https://javascript.info/async-await
	fs.writeFileSync(attemptsLog, new Date().toString() + '\n');
	var searchTermsShuffled = shflr.shuffle(readSearchTermsFromFile());
	if(numRetweets > searchTermsShuffled.length) {
		numRetweets = searchTermsShuffled.length;
	}
	for(let i = 0; i < numRetweets; i++) {
		tweeter.searchAndRetweet(searchTermsShuffled[i]);
		fs.appendFileSync(attemptsLog, searchTermsShuffled[i] + '\n');
		await pause(rest);
	}
};

var pause = function(ms) {
  	return new Promise(resolve => setTimeout(resolve, ms));
};

shuffleTermsAndFireRetweets(numRetweets, restTime);


