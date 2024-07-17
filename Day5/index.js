// Task 1
function evenOdd(num) {
    if(num % 2 == 0){
        console.log(`The number ${num} is Even.`);
    }
    else{
        console.log(`The number ${num} is Odd`);
    }
}
// evenOdd(9213)

// Task 2
function square(num) {
    console.log(`The square of the number ${num} is ${num * num}`);
}
// square(6)

// Task 3
function maxNumber(num1,num2){
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    }
    else{
        console.log(`${num2} is greater than ${num1}`);
    }
}
// maxNumber(12,3)

// Task 4
function addString(str1,str2) { 
    console.log(str1 + " " + str2);
 }
// addString("Hello","world")

// Task 5
let sum = (num1,num2) => {
    return num1 + num2
}
// console.log(sum(2,5));

// Task 6
let strInclude = (str) => {
    return str.includes("a")
}
// console.log(strInclude("Sam"));

// Task 7
let multiplication = (num1,num2=5) => {
    return num1 * num2
} 
// console.log(multiplication(5));

// Task 8
let greeting = (name,age=20) => {
    return `Hello ${name}, you are ${age} years old.`
}
// console.log(greeting("Sameer"));

// Task 9
let sqNum = (num) => {
    return num * num
}
let area = (func,num,pi=3.14) => {
    return func(num) * pi
}
// console.log(area(sqNum,5));

// Task 10
let add = (a) => {
    return a + a
}
let mul = (a) => {
    return a * a
}

let result = (func1,func2,value) => {
    let added = func1(value)
    let multiplied = func2(added)
    return  multiplied
}
// console.log(result(add,mul,2));

// Day 5 completed 🌊