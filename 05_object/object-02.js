// objects with functions

let myfunction = function() {
    return {
        name: 'alireza',
        family: 'gholizade'
    }
}
let value = myfunction();
console.log(value.family);


//challenge ++

//create an object of book {tite , author , pageNumber}

let book = {
    title: 'eat your frog',
    author: 'Brian Tracy',
    page: 350
}
let otherBook = {
    title: 'the dark side of a light chaser',
    author: 'Debi Ford',
    page: 500
}

//write function return {2 version of summary : version_1 , version_2}

let summary = function(obj) {
    return {
        firstVersion: `${obj.title} has ${obj.page} pages`,
        secondVersion: `${obj.title} has written by ${obj.author}`
    }
}

let output = summary(otherBook);
console.log(output.secondVersion);

//function --> return object --> save reutrn value --> console.log(value.version1) --> value.version2
// output (version-1) 'start with why has 400 pages'
//output (version-2) 'start with why has written by simon sinek'