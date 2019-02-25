
  
    // Creating an Array to hold the options that the computer can guess
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Creates variable to dolf wins, losses, and guesses remaining
  var wins = 0;
  var losses = 0;
  // var ties = 0;
  var guessesLeft = 10;
  // create an array to hold the users guesses so the guesses can be seen (using later code)
  var usedLetter = [];
  //attemping to hold the computers letter in an array. still working on how to push the letter in the array. Putting it in the array would allow me to get on letter for the 10 guesses and then randomly find another letter
  var computerLetterGuess = [];
  // was using individual lines within the if/else statements, decided to make it into a function within a variable to make it easier when writing long code. basically restarts the game, with 10 guesses and clears the users previous selected letters
  // 2.0 with the code was rewriten the restart function 
  var restart = function(){
    guessesLeft = 10;
    usedLetter = [];
    computerLetterGuess= [];
    // randomComputerGuess();
    game();}
  function randomComputerGuess () {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerLetterGuess.push(computerGuess)
    return computerGuess}
  
  //creates variable that reference Ids within the html to use in the future to display information
  var directionsText = document.getElementById("directions-text");
  var userChoiceText = document.getElementById("userchoice-text");
  var computerChoiceText = document.getElementById("computerchoice-text");
  var guessesLeftText = document.getElementById("guesses-left-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var tiesText = document.getElementById("ties-text");
  var usedLettersText = document.getElementById("used-letters-text");
  
 

  // scripted this section out as it did not work as i wanted and broke the game. I was attempting to get the computer guess to be selected on load instead of on each key stroke. it did not work
  // document.ready = function() {
  //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //   computerLetterGuess.push(computerGuess)
  // }
window.onload = function() {
  
    function game () {
      
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerLetterGuess.push(computerGuess);
    console.log(computerGuess[0]);

    document.onkeyup = function() {
    
      //this is where the users guess is selected on each key stroke
      var userGuess = event.key.toLowerCase();
      
      // for( i==0 ; i<computerChoices.length ; i++ ){
      //where the computer guess is chosen and is alos selected on each keystroke, still trying to figure that out
      // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      // computerLetterGuess.push(computerGuess)
  
      // forces the user to select a letter, if a symbol or number is chosen an alert will come up with code written later
      if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")
      )
      {
        
        if (usedLetter.indexOf(userGuess) >=0) {
          alert("Stop Guessing the same letter!");
        }
      
      
        //if the user guess matches the the computer selection the user WINs and the game restarts adding a 1 win, scripted out the ten guesses as I ended up going with the restart function instead
       if (userGuess === computerGuess) {
        wins++;
        // restart();
        alert("Correct! You must be a Psychic!")
        guessesLeft = 10;
        usedLetter = [];
        computerLetterGuess= [];
        game();
        }
  
        //if the user goes through all 10 guesses with out guessing the computers letter the user loses, adding 1 loss, and restarting the game. scripted out the code that i made useless with the restart function
        else {
        guessesLeft--;
        usedLetter.push(userGuess);
        }
        if(guessesLeft === 0){
        losses++;
        // restart()
        guessesLeft = 10;
        alert("The Letter was " + computerLetterGuess[0] + "   Guess you're not Psychic");
        usedLetter = [];
        computerLetterGuess= [];
        game();
        }
    
  
        // this hides the directions once a key as been used
        directionsText.textContent = "";
  
  
  
        // This is where the users wins, loses, guesses left, and letters guessed are displayed, currently have the computers letter displayed for trouble shooting this will be removed if the game where to be published
        userChoiceText.textContent = "You chose: " + userGuess;
        // computerChoiceText.textContent = "The computer chose: " + computerGuess;
        guessesLeftText.textContent = "guesses left "+ guessesLeft;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        // tiesText.textContent = "ties: " + ties;
        usedLettersText.textContent = "used letters " + usedLetter;
       }
        
      //an alert if the user guesses anything other than a letter
      else (
        alert("A Letter... Come on man!")
      )
      
    };  

    }
  game();  
    
  }


  // using this as the start of my game as it is the only was to get the game to work although it does not work as intended as the computer guess is choosen on each key stroke.
  