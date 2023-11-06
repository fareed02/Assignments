// CHAPTER # 7
// Q1 Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser;
// The value of a is 10:

var a = 10;

console.log("The value of a is:"  + " " + a);

++a 
console.log("The value of ++a is" + " " + a);

a++
console.log(a);
console.log("The value of a++ is" + " " + a);

--a;
console.log(a);
console.log("The value of --a is" + " " + a);

a--;
console.log(a);
console.log("The value of a-- is" + " " + a);

// Q2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
 
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
    result = 1 - 0 + 1 + 1;
    console.log("The output value of vaiable is" + " "  + result);

    // Q3 Write a program that takes input a name from user &
    // greet the user.

    var user = prompt("Enter your name");
    console.log(user);

    var greetUser = "Hello, " + user;
    alert(greetUser);

//     Q5 Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.