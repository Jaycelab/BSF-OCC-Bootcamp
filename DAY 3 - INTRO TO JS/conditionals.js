//if else if-else statement
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote!");
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote!");
}

let temprature = -1;
if (temprature < 0) {
  console.log("It is freezing!");
} else if (temprature >= 0 && temprature < 20) {
  console.log("It's cool outside!");
} else {
  console.log("It's a warm day.");
}

//Conditionals: Switch Statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It is the start of the week");
    break;
  case "Friday":
    console.log("It is the end of the week");
    break;
  default:
    console.log("This is an ordinary date.");
    break;
}
