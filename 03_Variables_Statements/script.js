//let is a keyword for defining a variable
let firstName = 'Brad';
console.log(firstName);

let lastName = 'Pitt';
console.log(lastName);

// how to combine firstName and LastName?

console.log(firstName);
console.log(lastName);

// no, the this solution is not ok , combine them
// you understand?

let fullName = firstName + lastName;
console.log(fullName);

// how to crate distance between names?

//1. first solution
let distance = " ";
let distanceName = firstName + distance + lastName;
console.log(distanceName);

//2. second solution
let name = firstName + ' ' + lastName;
console.log(name);

console.log("----------------numbers--------------");


// basic operators : +(add) -(subtract) * (multiply) /(devide)
let num1 = 26;
console.log(num1);
let num2 = num1 / 10;
console.log(num2);

//challenge
let studentScore = 19.5;
let maxScore = 20;
let percent = (studentScore / maxScore) * 100;
console.log(percent + " %");