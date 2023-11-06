// // Q1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)
// var multiDimensionalArray = [[],[],[]];

// // QDeclare and initialize a multidimensional array
// // representing the following matrix:

// var multiDimensional = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// // Q3. Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i <= 10; i++){
//     console.log(i);
// };

// // Q4. Write a program to print multiplication table of any
// // number using for loop. Table number & length should be
// // taken as an input from user.

// var tableArray = prompt("Enter a number to show its multiplication table ");
// var tableLength = prompt("Enter a lenght of multiplication table")

// for(var i = 1; i <= tableLength; i++) {

//     console.log(tableArray + " * " + i +
//     " = " + tableArray * i);
// }

// // Q5. Write a program to print items of the following array
// // using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”,
// // “strawberry”]

// var fruits = ["apple","banana", "mango" ,"orange","strawberry"];

// for (var i =0; i < fruits.length; i++) {
//     console.log(i,fruits[i]);
// };

// // Q6. Generate the following series in your browser. See
// // example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// // for(var i = 1; i <= 15 ; i++) {
// //     document.write(i + " ," +" ");
    
// // } 
 
// // for (var i = 10; i >= 1; i--) {
// //     console.log(i);
// //   };

// //   var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// //   var evenArray = [];
// //   var oddArray = [];

// //   for (var i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 === 0) {
// //       evenArray.push(arr[i]);
// //       document.write(arr[i] + " ");
// //     } else if(arr[i] % 2 !== 0){
// //         oddArray.push(arr[i]);
// //       document.write(arr[i] + " ");
// //     }
// //   }

// //   Q7. You have an array
// //   A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// //   Write a program to enable “search by user input” in an
// //   array.
// //   After searching, prompt the user whether the given item is
// //   found in the list or not. Example: 

//      var bakers = ["cake", "apple", "pie", "cookie", "chips", "patties"];
//      var userInput = prompt("Welcome to baker! What do you want to search");

//      for(var i =0; i < bakers.length; i++) {
//         if(bakers[i]===userInput) {

//             console.log("your items is available");
//             break;
//         }
//         else if(bakers[i]!==userInput) {
//             console.log("Current item is not available! Sorry");
//         }
//     }

//     // Q8. Write a program to identify the largest number in the
//     // given array.
//     // A = [24, 53, 78, 91, 12].

//     var largeNum = [24, 53, 78, 91, 12];
//     var largest = largeNum[0];
//     var smallest =largeNum[0];
 
// for (var i = 1; i < largeNum.length; i++) {
//   if (largeNum[i] > largest) {
//     largest = largeNum[i];
//   } else if(largeNum[i] < smallest);
//     smallest = largeNum[i];
// }

// document.write("The largest number in the array is: " + largest + "<br>");
// document.write("The smallest number in the array is: " + smallest);  

// // Q10. Write a program to print multiples of 5 ranging 1 to
// // 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }

//   var arrayLength = ["foo", "this", "is"];
//   arrayLength.length = 0;

//   arrayLength.push("bin");
//   console.log(arrayLength);

  var passward = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacter = "~!@#$%^&*()_+=|\/?>.;:'/{}[]<";
  var combinePassward = lowerCase + upperCase + specialCharacter;
  var randomPassward = "";
  
  for(var i=0; i<10; i++) {
     randomPassward = combinePassward[Math.floor(Math.random()*combinePassward.length)] ;
     passward += randomPassward;
     
}
alert(passward);