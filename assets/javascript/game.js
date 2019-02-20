
  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var wins = 0;
  var losses = 0;
  var ties = 0;
  var guessesLeft = 10;
  var usedLetter = []

  // Create variables that hold references to the places in the HTML where we want to display things.
  var directionsText = document.getElementById("directions-text");
  var userChoiceText = document.getElementById("userchoice-text");
  var computerChoiceText = document.getElementById("computerchoice-text");
  var guessesLeftText = document.getElementById("guesses-left-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var tiesText = document.getElementById("ties-text");
  var usedLettersText = document.getElementById("used-letters-text");
  

  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {

    // Will change the number of guesses on each key stroke
    // var guessesLeft = event.key

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    // for(i==0)
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")
    ) {


       if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10
        }
        else {
        guessesLeft--
        usedLetter = [];
        }
        if(guessesLeft === 0){
        losses++;
        guessesLeft = 10;
        }


        usedLetter.push(userGuess); 

        
      // if {
            // this pushes the players incorrect guess to the usedArray and writes it to the HTML
            // usedLetters.push(userGuess);
            // document.getElementById('userchoice-text') = usedLetter;
            // console.log(usedLetter);}
  

      // Hide the directions
      directionsText.textContent = "";

      // Display the user and computer guesses, and wins/losses/ties.
      userChoiceText.textContent = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
      guessesLeftText.textContent = "guesses left "+ guessesLeft;
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
      tiesText.textContent = "ties: " + ties;
      usedLettersText.textContent = "used letters " + usedLetter;
    }
  };