// Task 1
let arrOfNumbers = [1,2,3,4,5]
// console.log(arrOfNumbers);

// Task 2
// console.log(`First element : ${arrOfNumbers[0]}`);
// console.log(`Last element : ${arrOfNumbers[arrOfNumbers.length -1]}`);

// Task 3
// arrOfNumbers.push(6)
// console.log(arrOfNumbers);

// Task 4
// arrOfNumbers.pop()
// console.log(arrOfNumbers);

// Task 5
// arrOfNumbers.shift()
// console.log(arrOfNumbers);

// Task 6
// arrOfNumbers.unshift(0)
// console.log(arrOfNumbers);

// Task 7
let newArr1 = arrOfNumbers.map( (num) => num * 2 )
// console.log(newArr1);

// Task 8
let newArr2 = arrOfNumbers.filter((num) => num % 2 == 0)
// console.log(newArr2);

// Task 9
let initialValue = 0
let sumOfArr = arrOfNumbers.reduce( (accumulator,currentValue) => accumulator + currentValue,initialValue
)
// console.log(sumOfArr);

// Task 10
// for (let i = 0; i < arrOfNumbers.length; i++) {
//     console.log(arrOfNumbers[i])
// }

// Task 11
// arrOfNumbers.forEach( (i) => {
//     console.log(i)
// })

// Task 12
let Matrix_2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// Matrix_2d.forEach((row) => console.log(row))

// Task 13
// console.log(Matrix_2d[0][0]);
// console.log(Matrix_2d[0][1]);
// console.log(Matrix_2d[2][1]);

// Day 6 completed 🌊
