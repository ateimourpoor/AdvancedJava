var inquirer = require('inquirer');
var SelectedLetter = require("./cunstructors.js");


var allWords = ["manchester", "barcelona", "atlanta", "madrid", "gladiator", "tehran"];
var validLetter = false;
var theWord = "";
var remaining = 7;


function start() {
    remaining = 7;
	console.log("\nGame Time!\n");
	console.log("Remaining Guesses: " + remaining);
    theWord = allWords[Math.floor(Math.random() * allWords.length)];
	wordNow = new SelectedLetter(theWord);
	wordNow.showblanks();
		inquirer.prompt([
			{
		    	type: 'input',
		    	name: 'guess',
		    	message: 'Type a Letter'
		 	}
			]).then(letterCheck);
	};

var letterCheck = function(answers) {
    answer = answers.guess;
    validLetter = false;
    for (var i=0; i < wordNow.letters.length; i++) {
        if (wordNow.letters[i] == answer) {
            validLetter = true;
        }
    }

    if(validLetter) {
        for (var i = 0; i < wordNow.letters.length; i++) {
            if (wordNow.letters[i] == answer) {
                console.log("\nAwesome!");
                wordNow.showletter(answer);
                console.log("\nRemaining Guesses: " + remaining);
                console.log(wordNow.array.join("  "));
                if (wordNow.letters.toString() == wordNow.array.toString()) {
                    console.log("\nYou Nailed it. Now Guess the next Word!\n");
                    return playAgain();
                } else {
                    return nextGuess();
                }
            }
        }
    }
    else {
        console.log("\n*You can do better\n");
        remaining--;
        console.log("Remaining Guesses: " + remaining);
        console.log(wordNow.array.join("  "));
        if (remaining > 0) {
            nextGuess();
        } else if (remaining === 0) {
            end();
        }
    }
};


var end = function() {
	inquirer.prompt([
	 	{
	 		type: 'confirm',
	 		name: 'end',
	 		message: 'Out of guesses! Would you like to end the game?'
	 	}
		]).then(function (answers) {
			var end = answers.end;
			if (end != true) {
				start();
			}
			else {
				return;
			}
		}); 
};

var nextGuess = function() {
	inquirer.prompt([
			{
		    	type: 'input',
		    	name: 'guess',
		    	message: 'Type a Letter'
		 	}
			]).then(letterCheck);
};

var playAgain = function() {
	validLetter = false;
    remaining = 7;
	console.log("Remaining Guesses: " + remaining);
    theWord = allWords[Math.floor(Math.random() * allWords.length)];
	wordNow = new SelectedLetter(theWord);
	wordNow.showblanks();
		inquirer.prompt([
			{
		    	type: 'input',
		    	name: 'guess',
		    	message: 'Guess a letter!'
		 	}
			]).then(letterCheck);
};


start();