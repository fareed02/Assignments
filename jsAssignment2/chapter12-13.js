// Q2.Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var firstInteger = prompt("Enter the first integers");
var secondInteger = prompt("Enter the second integers");

if (firstInteger > secondInteger) {
    alert("The larger integer is: " + firstInteger);
  } else if (secondInteger > firstInteger) {
    alert("The larger integer is: " + secondInteger);
  } else if (firstInteger === secondInteger) {
    alert("Both integers are equal.");
  }

//   Q3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var numberSpecification = prompt("Enter the number for verifying the state of number");

if (numberSpecification > 0) {
    alert("Entered number is positive")
} else if(numberSpecification < 0) {
        alert("Entered number is negative")
    } else{
        alert("Entered number is zero")   
    }

    // Q4. Write a program that takes a character (i.e. string of
    //     length 1) and returns true if it is a vowel, false otherwise


// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correctPassward = "MyPassward123";
var userPassward = prompt("Enter your passward");

if (userPassward ==="") {

    alert("Please enter the passward for further process.")
    userPassward = prompt("Enter the passward");

} else if(userPassward === correctPassward) {
    alert("Correct passward")
} else {
    alert("The passward you entered is incorrect.")
}

// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
 var hour = 13;
 if (hour < 18) {
 greeting = "Good day";
 }
 else {
 greeting = "Good evening";
 }

//  @7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements