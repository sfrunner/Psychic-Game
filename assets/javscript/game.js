document.addEventListener("DOMContentLoaded", function(event) {
 	var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var compGenLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
	var winsCount = document.getElementById("wins-count");
	var winsCountNumber = 0;
	var lossesCount = document.getElementById("losses-count");
	var lossesCountNumber = 0;
	var guessesLeftCount = document.getElementById("guesses-left-count");
	var guessesLeftCountNumber = 10;
	var lettersGuessed = document.getElementById("letters-guessed");
	var lettersGuessedArray = [];
	var compGenLetterRevealed = document.getElementById("computer-letter-revealed");
	var compGenLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
	document.addEventListener("keypress", function(event) {
		var userGenLetter = event.key.toLowerCase();
		compGenLetterRevealed.innerHTML = "";
		if(userGenLetter === compGenLetter){
			winsCountNumber++;
			winsCount.innerHTML = winsCountNumber;
			guessesLeftCount.innerHTML = 10;
			guessesLeftCountNumber = 10;
			lettersGuessed.innerHTML = "";
			lettersGuessedArray = [];
			compGenLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
			}
		if(userGenLetter !== compGenLetter){
			guessesLeftCountNumber = guessesLeftCountNumber - 1;
			guessesLeftCount.innerHTML = guessesLeftCountNumber;
			lettersGuessedArray.push(userGenLetter);
			lettersGuessed.innerHTML = lettersGuessedArray;
				if(guessesLeftCountNumber === 0){
				guessesLeftCount.innerHTML = 10;
				guessesLeftCountNumber = 10;
				lossesCountNumber++;
				lossesCount.innerHTML = lossesCountNumber;
				lettersGuessed.innerHTML = "";
				compGenLetterRevealed.innerHTML = "The letter was " + compGenLetter;	
				lettersGuessedArray = [];
				compGenLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
				}
			}
	});
});