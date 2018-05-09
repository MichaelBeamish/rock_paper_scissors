// We need 4 variables...
var computerChoiceNumber = "";
var computerChoiceString = "";
var totalScoreUser = 0;
var totalScoreComputer = 0;


// Every time a point is added to the user score or computer score we wil check to see if the score has reached 5.
function checkForWin() {
    if (totalScoreUser>=5) {
        // If the user gets 5 points display the wining text...
        document.getElementById("result").textContent=`Game Over! You won ${totalScoreUser} to ${totalScoreComputer}!`;

        // Return the scores to 0 so another game can start...
        totalScoreComputer = 0;
        totalScoreUser = 0;
        document.getElementById("scoreUser").textContent=``;
        document.getElementById("scoreComputer").textContent=``;
    }
    if (totalScoreComputer>=5) {
        // If the computer gets 5 points display the losing text...
        document.getElementById("result").textContent=`Game Over! Computer won ${totalScoreComputer} to ${totalScoreUser}!`;

        // Return the scores to 0 so another game can start...
        totalScoreComputer = 0;
        totalScoreUser = 0;
        document.getElementById("scoreUser").textContent=``;
        document.getElementById("scoreComputer").textContent=``;
    }
}


// This function will randomly pick 1, 2, or 3 and assign Rock, Paper, or Scissors accordingly.
function getRandomInt() {
    // When the max is set to 3 we have to add 1 otherwise the outcome will be 0, 1, or 2.
    computerChoiceNumber = Math.floor(Math.random() * Math.floor(3)) + 1;
    switch (computerChoiceNumber) {
	case 1:
	    computerChoiceString ='Rock';
	    break;
	case 2:
	    computerChoiceString ='Paper';
	    break;
	case 3:
	    computerChoiceString ='Scissors';
	    break;
	}
}

// If the element with the id of rock is clicked...
$('#rock').click(function() {
    // Generate the computer's hand...
	getRandomInt();

    // Display the user's and computer's hand.
	document.getElementById("userHand").textContent="You Chose Rock";
	document.getElementById("computerHand").textContent=`Computer Chose ${computerChoiceString}`;


    // Check the computer's choice and determine who won...
    switch (computerChoiceNumber) {
    // If computer also chose rock results are a tie.
	case 1:
    document.getElementById("result").textContent="Tie!";
    break;
    // If computer chose paper computer wins and computer score goes up by 1.
	case 2:
    document.getElementById("result").textContent="Point to computer!";
    totalScoreComputer+=1;
    document.getElementById("scoreComputer").textContent=`Computer score: ${totalScoreComputer}`;
    document.getElementById("scoreUser").textContent=`Your score: ${totalScoreUser}`;
    break;
    // If computer chose scissors computer loses and user score goes up by 1.
	case 3:
    document.getElementById("result").textContent="Your point!";
    totalScoreUser+=1;
    document.getElementById("scoreComputer").textContent=`Computer score: ${totalScoreComputer}`;
    document.getElementById("scoreUser").textContent=`Your score: ${totalScoreUser}`;
    break;
	}

    // After the points are adjusted check to see if anyone has reached 5 points by calling the checkForWin function...
    checkForWin();
});



// See the 'rock.click' function above for comments.
$('#paper').click(function() {
	getRandomInt();
	document.getElementById("userHand").textContent="You Chose Paper";
	document.getElementById("computerHand").textContent=`Computer Chose ${computerChoiceString}`;

    switch (computerChoiceNumber) {
	case 2:
    document.getElementById("result").textContent="Tie!";
    break;
	case 3:
    document.getElementById("result").textContent="Point to computer!";
    totalScoreComputer+=1;
    document.getElementById("scoreComputer").textContent=`Computer score: ${totalScoreComputer}`;
    document.getElementById("scoreUser").textContent=`Your score: ${totalScoreUser}`;
    break;
	case 1:
    document.getElementById("result").textContent="Your point!";
    totalScoreUser+=1;
    document.getElementById("scoreComputer").textContent=`Computer score: ${totalScoreComputer}`;
    document.getElementById("scoreUser").textContent=`Your score: ${totalScoreUser}`;
    break;
	}
    checkForWin();
});


// See the 'rock.click' function above for comments.
$('#scissors').click(function() {
	getRandomInt();
	document.getElementById("userHand").textContent="You Chose Scissors";
	document.getElementById("computerHand").textContent=`Computer Chose ${computerChoiceString}`;

    switch (computerChoiceNumber) {
	case 3:
    document.getElementById("result").textContent="Tie!";
    break;
	case 1:
    document.getElementById("result").textContent="Point to computer!";
    totalScoreComputer+=1;
    document.getElementById("scoreComputer").textContent=`Computer score: ${totalScoreComputer}`;
    document.getElementById("scoreUser").textContent=`Your score: ${totalScoreUser}`;
    break;
	case 2:
    document.getElementById("result").textContent="Your point!";
    totalScoreUser+=1;
    document.getElementById("scoreComputer").textContent=`Computer score: ${totalScoreComputer}`;
    document.getElementById("scoreUser").textContent=`Your score: ${totalScoreUser}`;
    break;
	}
    checkForWin();
});