// Variables declaration
var options = ['R','P','S'];
var userPick = "";
var playAgain = true;
var wins = 0;
var losses = 0;
var ties = 0;

//Function to play game by asking user to serPick letter
var playGame = function() {
    var userPick = window.prompt("Enter R, P or S").toUpperCase();
    // When user does not enter info or cancels, it ends
    if (!userPick){
        return;
    }
    //Pick a random computer result
    var randomPick = Math.floor(Math.random() * options.length);
    var computerPick = options[randomPick];
    window.alert("The computer chose: " + computerPick);
    
    // Comparison user and computer retults and calculates score
    if (userPick === computerPick) {
        alert("You tied!");
        ties++;
    } else if (
        (userPick === 'R' && computerPick === 'S') ||
        (userPick === 'P' && computerPick === 'R') ||
        (userPick === 'S' && computerPick === 'P')
    ) {
        window.alert("You won!");
        wins++;   
    } else {
        window.alert("You lost");
        losses++;
    }

    // Shows score and prompts the user to continue or end game
    window.alert ("Ties: " + ties +" wins: " + wins + " losses: " + losses);
    var playAgain = window.confirm("Do you want to continue playing?");
    if (playAgain) {
      playGame();
    } else {
      window.alert(
        "Thank you for playing!! \n Your final score is: wins: " +
          wins +
          ", ties: " +
          ties +
          ", and losses: " +
          losses+"."
      );
    }
}

// Initial function invoke
playGame();
