// Q1. Write a program that displays current date and time in
// your browser.
var todayDate = new Date();
console.log(todayDate);

// Q2. Write a program that alerts the current month in words.
// For example December.

var monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  var month = new Date();
  var currentMonth = month.getMonth();
  var currentMonthName = monthNames[currentMonth];
  alert("Current month:" + " " + currentMonthName);
  
//   Q3. Write a program that alerts the first 3 letters of the current
//   day, for example if today is Sunday then alert will show
//   Sun.

var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];

var day = new Date();
var currentDay = day.getDay();
var currentDayName = dayNames[currentDay];
 alert("Today is" + " " + currentDayName);

//  Q4. Write a program that displays a message “It’s Fun day” if
//  its Saturday or Sunday today.

if(currentDay=== 6 || currentDay===0) {
    console.log("Its Fun Day");
} else {
    console.log("Its a working day");

}

// Q5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var month1 = new Date();
var month2= month.getDay();

if(month2 <= 16) {
    console.log("Fisrt fifteen day of month ")
}else {
    console.log("Last days of the month")
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var currentDate = new Date();

var minutesSince1970 = Math.floor(currentDate.getTime() / (1000 * 60));


console.log("Current Date:" + " " + currentDate);
console.log("Elapsed miliseconds since jan. 1, 1970 :" + " " + currentDate .getTime());
console.log(`Elapsed minutes since midnight, Jan. 1, 1970: ${minutesSince1970}`);

// Q7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.  

  var checkTime = new Date().getHours();

  if(checkTime < 12) {
    console.log("Its AM")
  } else {
    console.log("Its PM")
  }

//   Q8. Write a program that creates a Date object for the last day
//   of the last month of 2020 and assigns it to variable named
//   laterDate. 

var lastDayOf2020 = new Date(2020, 11, 31);

var laterDate = lastDayOf2020;

console.log(`Later Date: ${laterDate}`);

// Q9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
   var startingDate = new Date(2024, 2, 13);
   
   var currentDateNow = new Date();

   var daysRemaining = startingDate - currentDateNow;

   console.log(daysRemaining);

   var daysPassed = Math.floor(daysRemaining / (1000 * 60 * 60 * 24));

console.log(`Number of days past since 1st Ramadan: ${daysPassed}`);

// Q10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var startingSec = new Date(2015, 11, 5);

var currentSec = new Date();

var diff = currentSec - startingSec;

var remainingSec = Math.floor(diff / 1000);

console.log(`On reference date ${startingSec}`)
console.log(`${remainingSec} seconds had passed since beginning of 2015.`);

// Q11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

 var  currentTime = new Date();

 var hourAgo = new Date();


var currentHours = currentDate.getHours();

// Reset the date object an hour ahead
 hourAgo.setHours(currentHours - 1);

// Display the modified date object in your browser
console.log("Current Date and Time:" + currentTime )
console.log("1 hour ago, it was:" + hourAgo )

// Q12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var dateNow = new Date();

var backTime = new Date(1923, 8, 17);

console.log("Current Date:" + " " + dateNow);
console.log("100 years back, it was :" + " " + backTime);

// Q13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userAge = new Date().getFullYear();

var userBirthYear = parseFloat(prompt("Enter your birth year"));

var resultAge = userAge - parseInt(userBirthYear);

console.log("Your age is:" + " " + resultAge);

// Q14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

var chargesPerUnit = 12.50;
var dueDate = 10;

var customerName = "Fareed Shakoor";
var currentMonth = "September";
var numberOfUnits = 150;

var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

var currentDateBill = new Date();
var currentDayBill = currentDateBill.getDate();
let latePaymentSurcharge = 0;

if (currentDayBill > dueDate) {
    var daysLate = currentDayBill - dueDate;
    var surchargeRate = 0.02; 
    latePaymentSurcharge = (netAmountPayable * surchargeRate * daysLate).toFixed(2);
}

var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

document.write("<h2>Bill Details</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> PKR " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> PKR " + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> PKR " + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> PKR " + grossAmountPayable + "</p>");






