// Q1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter your cite");

if(city === "karachi") {

     city = "Welcome to city of lights";
    alert(city);
}

// Q2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");

if (gender === "male") {
    alert("Good Morning Sir.");
  } else if (gender === "female") {
    alert("Good Morning Ma'am.");
  } else {
    alert("Invalid gender input.");
  }

//  Q3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var roadColor = prompt("Enter the color of road traffic sinnal");

if (roadColor === "red") {
    alert("Must Stop.");
  } else if (roadColor === "yellow") {
    alert("Ready to move.");
  } else if (roadColor === "green") {
    alert("Move Now")
  }

//  Q4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

  var userFuel = prompt("Enter the remaining fuel in your car");

  if(userFuel < "0.25litres") {
    alert("Please refill the fuel in your car")
  } else {
    alert("You have enough fuel")
  }

//   Q5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 var a = 4;

if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// Q6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var marks = prompt("Enter your marks got in exams");

if (marks >= 80) {
    alert("you got A-one grade.\n Excellent!")
} else if (marks >= 70) {
    alert("you got A grade.\n Good!")

} else if (marks >= 60) {
    alert("you got A grade.\n You need to imrpove yourself!")

}else if (marks < 60) {
    alert("Fail.\n Sorry!")
}
 
// Q8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var inputNumber = prompt("Enter the number");

if (inputNumber % 3 === 0) {
    alert(inputNumber + " " + "is divisible by 3.")
} else {
    alert(inputNumber + " " + "is not divisible by 3.")
}

// Q9.Write a program that checks whether the given input is an
// even number or an odd number.

var number = prompt("Enter the for verify that is even or odd");

if (number % 2 === 0) {
    alert(number + " " + "is an even number.")
} else {
    alert(number + " " + "is ann odd number.")
}

// Q10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = prompt("Enter the temperature to check the atmospheric condition");

if (temperature > 40) {
    alert("It is too hot outside");
} else if (temperature > 30) {
    alert("The Weather today is Normal");
} else if (temperature > 20) {
    alert("Today’s Weather is cool")
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.")
}

// Q11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = parseFloat(prompt("Enter the first number:"));
  var secondNumber = parseFloat(prompt("Enter the second number:"));
  var operation = prompt("Enter the operation (+, -, *, /, %):");

  var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
    alert(result);
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
  } else if (operation === "/") {
    if (secondNumber !== 0) {
      result = firstNumber / secondNumber;
    } else {
      alert("Cannot divide by zero.");
    }
  } else if (operation === "%") {
    result = firstNumber % secondNumber;
  } else {
    alert("Invalid operation.");
  }
