// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userNum = prompt("Enter any positive number");
document.write("Your entered number is: " +" " + userNum + "<br>");

if(userNum > 0) {
    
    var roundValue = Math.round(userNum);
    var floorValue = Math.floor(userNum);
    var ceilValue = Math.ceil(userNum);
} else {
    alert("Please enter the positive number only");
}

document.write("Round off value is: " +" " + roundValue + "<br>");
document.write("floor value is: " +" " + floorValue + "<br>");
document.write("Ceil value is: " +" " + ceilValue + "<br>" + "<br>");

// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt("Enter the negative number");
document.write("Your entered number is: " +" " + userInput + "<br>");

if(userInput < 0) {
    
    var roundNum = Math.round(userInput);
    var floorNum = Math.floor(userInput);
    var ceilNum = Math.ceil(userInput);
} else {
    alert("Please enter the negative number only");
}

document.write("Round off value is: " +" " + roundNum + "<br>");
document.write("floor value is: " +" " + floorNum + "<br>");
document.write("Ceil value is: " +" " + ceilNum + "<br>" + "<br>");

// Q3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var absoluteNumber = -4;
var absoluteNum = 5;
 document.write("The absolute value of" + " " + absoluteNumber + " " +"is" + " " + Math.abs(absoluteNumber) + "<br>");
 document.write("The absolute value of" + " " + absoluteNum + " " +"is" + " " + Math.abs(absoluteNum) + "<br>" + "<br>");

// Q4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var diceValue = Math.floor(Math.random() * 4) + 1;
var diceValueNum = Math.floor(Math.random() * 6) + 1;

document.write("Random dice value: " +" " + diceValue + "<br>");
document.write("Random dice value: " +" " + diceValueNum + "<br>" + "<br>");

// Q5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var randomValue1 = Math.ceil(Math.random()*2);
var randomValue2 = Math.ceil(Math.random()*1);

// Determine the results for each coin toss
var coinResult1 = randomValue1 > 1 ? "Head" : "Tail";
var coinResult2 = randomValue2 < 0.5 ? "Head" : "Tail";

document.write(randomValue1 + " " + "Random coin value:" + coinResult1 + "<br>");
document.write(randomValue2 + " " + "Random coin value:" + coinResult2 + "<br>" + "<br>");

// Q6. Write a program that shows a random number between 1
// and 100 in your browser.

var randomNumber = Math.floor(Math.random()*100);
document.write("Random number beween 1 to 100 is:" + " " + randomNumber + "<br>" + "<br>");

// Q7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
 var userWeight = prompt("Enter your weight in kilograms");

var userResult = userWeight.random
console.log(userResult);

// Q8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = prompt("Guess the secret number (between 1 to 10):");

if (userGuess === null) {
    alert("You canceled the game.");
  } 

    if (userGuess === "") {
      alert("You entered a empty number. GAME OVER"); 
      
    }
     else if(userGuess === secretNumber) {
        alert(`Congratulations! You guessed the secret number (${secretNumber}) correctly.`);

    }else {
        alert(`Sorry, the secret number was ${secretNumber}. Try again!`);

    }



  


