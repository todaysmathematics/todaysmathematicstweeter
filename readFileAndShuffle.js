var fs = require("fs");

var searchTermsFileContent = fs.readFileSync("searchTerms.txt", "utf8");
var searchTermLines = searchTermsFileContent.split("\n")
var terms = searchTermLines.filter(term => term.trim().length > 0);

var shuffle = function(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

shuffle(terms);
console.log(terms);

// retweet the first 21 of these per day?
//
//
