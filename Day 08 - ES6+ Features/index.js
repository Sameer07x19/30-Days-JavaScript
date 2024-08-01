
// Task 1
const myName = "Sameer Sayyed"
const age = 20

// console.log(`My name is ${myName}, I am ${age} years old.`);


// Task 2
const multiLineString = `Hello World 
next line `
// console.log(multiLineString);


// Task 3 
const arrDestructuring = [1,2,3,4,5]  
const [first, second, ...remaining] = arrDestructuring;

// console.log(first);
// console.log(second);
// console.log(remaining);


// Task 4
const book = {
    title: "One Piece",
    author: "Oda",
    year: 2019
}
const {title, author, year} = book

// console.log(title);
// console.log(author);


// Task 5
const arr1 = [123,"abc","Hello World"]
const arr2 = [1, 2, 3, ...arr1]
// console.log(arr2);


// Task 6
function sum(num, ...restArgs) { 
    let total = num
    for (const rest of restArgs) {
        total = total + rest
    }
    console.log(total);
 }
// sum(1,2,3)


// Task 7
function multiply(num1,num2 = 1) {
    console.log(num1 * num2);
}
// multiply(5)


// Task 8
const prop = 20
function ObjMethod() {
    console.log("Object method");
}

const enhancedObj = {
    prop,
    ObjMethod,
    hello() {
        console.log("Hello World");
    }
}
// console.log(enhancedObj);
// console.log(enhancedObj.prop);
// enhancedObj.ObjMethod()
// enhancedObj.hello()


// Task 9
const computeIt = "computing"
const computedVarObj = {
    [computeIt]: "Done"
}
console.log(computedVarObj.computing);


// Day 8 Completed 🌊