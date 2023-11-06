// Q1. Declare an empty array using JS literal notation to store
// student names in future.

const studentName = [];

// Q2. Declare an empty array using JS object notation to store
// student names in future.

const student = [{}];

// Q3. Declare and initialize a strings array.

const stringArray = ['india', 'pakistan', 'China', 'America'];

// Q4. Declare and initialize a numbers array.

const numberArray = [1,2,3,4,5];

// Q5. Declare and initialize a boolean array.

const booleanArray = [true, false, false, true];

// Q6. Declare and initialize a mixed array.

const mixedArray = ['string', 2, true, {}];

// Q7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

const educationQualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
  ];
  
  document.write("<h2>Education Qualifications in Pakistan:</h2>");
  document.write("<ol>");
  
  for (let i = 0; i < educationQualifications.length; i++) {
    document.write("<li>" + educationQualifications[i] + "</li><br>");
  }

//   Q8. Write a program to store 3 student names in an array.Take
//   another array to store score of these three students.
//   Assume that total marks are 500 for each student, display
//   the scores & percentages of students like:

    const names = ['Michael', 'John', 'Tony'];

    const score = [320, 230, 480];

    document.write ("Score of" + " " + names[0]  + " " + "is" +" " + score[0] +" " + ".Percentage: 64%<br>")
    document.write ("Score of" + " " + names[1]  + " " + "is" +" " + score[1] +" " + ".Percentage: 46% <br>")
    document.write ("Score of" + " " + names[2]  + " " + "is" +" " + score[2] + " " + ".Percentage: 96%<br>\n<br>")

// Q9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

  const arr = ["Red", "Pink", "Yellow", "Brown <br>"];
  
  document.write("Original Array: " + arr.join(', ') +"<br>");

  const userColor = prompt("Enter the color you want to display in the beginning");
   arr.unshift(userColor);
   document.write("Updated first Array: " + arr.join(', ') + "<br>");

   const userEndColor = prompt("Enter the color you want to display in the ending");
   arr.push(userEndColor);
   document.write("Updated last Array: " + arr.join(', ') + "\n <br>");

//   document.write("Original Array: " + arr.join(', ') +"\n <br>");

  const userColor1 = prompt("Enter the first color you want to add in the beginning");
  const userColor2 = prompt("Enter the second color you want to add in the beginning");
  arr.unshift(userColor2, userColor1);
  document.write("Updated Array: " + arr.join(', ') + "\n <br>\n");

//   DLELETING THE FIRST Color IN THE INDEX
     const secondArray = ["Ali", "Ahmend", "Nawaz", "Salman", "Abid" ];
     document.write ("Original Array" + secondArray.join(', ') + " <br>")

     secondArray.shift();
  document.write("Updated Array: " + secondArray.join(', ') + " <br>");

//   DLELETING THE LAST ARRAY IN THE INDEX

    secondArray.pop();
  document.write("Updated Array: " + secondArray.join(', ') + " <br>");

//   f. Ask the user at which index he/she wants to add a color
//   & color name. Then add the color to desired
//   position/index. . Display the updated array in your
//   browser.
     
     const newColor = ["Orange", "Pink", "Dark Blue", "Black", "Forest Green"]

     const userIndex = prompt("Enter the index number where you want to add your color");
     const userPosition = prompt("Enter the color name which you want to add");
      
     if (userIndex >= 0 && userIndex < arr.length) {
        newColor.splice(userIndex,0, userPosition);
       document.write("Updated Array: " + newColor.join(', ') + " <br>");

     }

    //  g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

  // Initialize an array with color names
var colorArray = ["Red", "Green", "Blue", "Yellow", "Orange"];

// Display the array elements in the browser
document.write("Original Array: " + colorArray.join(', ') + "<br>");

// Ask the user for the index and number of colors to delete
var deleteIndex = parseInt(prompt("Enter the index from which you want to delete colors (0 to " + (colorArray.length - 1) + "):"));
var deleteCount = parseInt(prompt("Enter the number of colors you want to delete:"));

// Validate the index input
if (deleteIndex >= 0 && deleteIndex < colorArray.length && deleteCount > 0) {
    // Delete the specified number of colors from the specified index
    colorArray.splice(deleteIndex, deleteCount);

    // Display the updated array in the browser
    document.write("Updated Array: " + colorArray.join(', '));
} else {
    document.write("Invalid input. Please enter valid index and delete count.\n <br>");
}

// Q10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
     const studentsScore = [320, 230, 480, 120 ];

     document.write("Scores of Student:" + " " + studentsScore + " <br>")
     studentsScore.sort();
     document.write("Ordered Scores of Student:" + " " + studentsScore + " <br>");

    //  Q11.Write a program to initialize an array with city names.
    //  Copy 3 array elements from cities array to selectedCities
    //  array.

     const cityNames = ["Karachi", "islamabad", "Lahore", "Peshawar", "Multan", "Quetta", "Faisalabad"]

    
     document.write("Selected city list:\n <br>" + " " + cityNames.slice(1,5) + "<br>");

    //  Q12. Write a program to create a single string from the
    //  below mentioned array:
    //  var arr = [“This ”, “ is ”, “ my ”, “ cat”];
    //  (Use array’s join method)

       const singleString = ["This", "is", "my", "cat"]

       console.log(singleString.join(" " ));

// Q15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

   // Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Function to generate and display the dropdown/select menu
function generateDropdown() {
    document.write('<select id="manufacturerSelect">');
    for (var i = 0; i < phoneManufacturers.length; i++) {
        document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
    }
    document.write('</select>');
}

// Call the function to generate and display the dropdown/select menu
generateDropdown();






   