
// Task 1
const addNumber = require("./Modules/module1");
addNumber(2,3)


// Task 2
const obj = require("./Modules/module2")
obj.greet()


// Task 3
const {sum,diff,prod} = require("./Modules/module3")
console.log(prod(2,6));


// Task 4
const greeting = require("./Modules/module4")
greeting("Sam")


// Task 5
const task5 = require("./Modules/module5")
task5.detail()


// Task 6
const lodash = require("lodash")
const task6 = [1,2,3,4,5]
console.log(lodash.sum(task6));
console.log(lodash.mean(task6));


// Task 7
const axios = require('axios')
const url = "https://jsonplaceholder.typicode.com/posts/1"

async function task7() {
    try {
        const response = await axios.get(url);
        console.log(response.data.title);
    } catch (error) {
        console.log(error.message);
    }
}
task7()


// Day 13 Completed 🌊