// Q1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

    var firstName = prompt("Enter the first name");
    var lastName = prompt("Enter the last name");

    var fullName = firstName + " " + lastName;

    console.log(fullName);

//     Q2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var mobileInput = prompt("Enter your favorite phone");

console.log(`My favorite phone is: ${mobileInput}`)
console.log(`Lenght of string: ${mobileInput.length}`);

// Q3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var country = "Pakistani";

console.log(`String: ${country}`);
console.log(`Index of 'n': ${country.indexOf("n")}`);

// Q4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var lastItem = "Hello World";

var lastItem = "Hello World";

console.log(`String: ${lastItem}`);
console.log(`Last index of 'l': ${lastItem.lastIndexOf("l")}`);

// Q5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var character = "Pakistani";

console.log(`String: ${character}`);
console.log(`Character at index 3 : ${character.charAt(3)}`);
 

