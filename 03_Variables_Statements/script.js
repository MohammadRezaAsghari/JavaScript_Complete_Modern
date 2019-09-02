//let is a keyword for defining an variable
let firstName = 'Brad';
console.log(firstName);

let lastName = 'Pitt';
console.log(lastName);

// how to combine firstName and LastName?

console.log(firstName);
console.log(lastName);

// no, the abose solution is not ok , combine them
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