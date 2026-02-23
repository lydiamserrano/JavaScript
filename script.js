/*
  Module 2: Variables
  This program asks for a first name and a favorite number,
  then calculates the area of a circle using that number as the radius.
*/

// Ask the user for their first name and store it in Fname
let Fname = prompt("What is your first name?");

// Create a constant piValue to store Pi to 7 significant digits
const piValue = 3.1415926;

// Ask the user to input their favorite number and store it in myFavNum
let myFavNum = prompt("What is your favorite number?");

// Convert the favorite number from text to a number
myFavNum = Number(myFavNum);

// Calculate the area of a circle using myFavNum as the radius
// A = πr^2
let myArea = piValue * (myFavNum ** 2);

// Round area to 6 decimal places so it looks nicer
myArea = myArea.toFixed(6);

// Display the contents of each variable to the webpage 
const message = `Hello ${Fname}, you entered ${myFavNum} as your favorite number.
If that was the radius of a circle, the circle’s area would be ${myArea}.`;

// Put message on the webpage
document.getElementById("output").textContent = message;