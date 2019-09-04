// a crucial difference between primitive vs object

let a = 10;
let b = a;
a = 40;
// console.log(a);
// console.log(b);

/// 

let obj1 = {
    page: 100
}
let obj2 = obj1;

obj1.page = 400;

console.log(obj1);
console.log(obj2);