// Task 1
for(i=1;i<=10;i++){
    // console.log(i)
}

// Task 2
for (let i = 1; i < 11; i++) {
    // console.log("5 x " + i + " = " + 5 * i)
}

// Task 3
let num = 1
let sum = 0
// while(num < 11){
//     sum = sum + num
//     num++
// }
// console.log(sum)

// Task 4
let rev = 10
while (rev > 0) {
    // console.log(rev);
    rev--
}

//Task 5
do{
    // console.log(num);
    num++
}
while(num < 6)

// Task 6 
let factorialNumber  = 5;
let factorial = 1;
do{
    factorial = factorial * factorialNumber;
    factorialNumber--;
}while(factorialNumber > 0)
// console.log(factorial)

// Task 7
for (let i = 1; i < 6; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
        row = row + "*"
    }   
    // console.log(row);
}

// Task 8
for (let i = 0; i < 11; i++) {
    if(i == 5){
        // console.log(`Number ${i} Detected`)
        continue // continue the loop from the next iteration and skip the loop in the current iteration
    }
    // console.log(`The number : ${i}`)
}

//Task 9
for (let i = 0; i < 11; i++) {
    if(i == 7){
        // console.log(`Number ${i} Detected`)
        break // exit the loop
    }
    // console.log(`The number : ${i}`)
}

// Day 4 completed 🌊