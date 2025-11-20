// This is an alert
// alert ('An Alert')
// This is a confirm type of alert
// confirm ('Yes or no?')
// This is a prompt kind of alert
// prompt ('Enter a number')

// This is a number
var num = 1;
console.log(typeof num)

// This is a function
var myFunction = function doSomething() {
    return "something";
}
console.log(typeof myFunction)

// This is a boolean - true or false
var myBoolean = true;
console.log(myBoolean)

// This is an object
console.log(typeof null)

// This is undefined
console.log(typeof undefined)

// This ia a string
console.log ("My string")

// var = can be declared, assigned, initialised, re-declared and re-assigned

// let may be:
//declared
//assigned
//initialised
// re-assigned

let b;
// let b; SyntaxError: Identifier 'b' has already been declared


// const may be
//must be initialised
//cannot be re-assigned OVERALL

const c = 3;
// c = 4; TypeError: Assignment to constant variable

const dimensions ={
    width: 1200,
    height: 900,
    depth: 500,
};

dimensions.depth = 600;
// creates a table
console.table(dimensions)