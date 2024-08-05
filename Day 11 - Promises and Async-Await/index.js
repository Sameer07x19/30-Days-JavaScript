
// Task 1
const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve("1: Success")
    }, 2000);
})
promiseOne.then(function (message) {
    console.log(message);
})


// Task 2
const promiseTwo = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve("Success")
        }else{
            reject("2: Error: " + error)
        }
    }, 2000);
})
promiseTwo.then(function (message) {
    console.log(message);
})
.catch(function (error) {
    console.log(error);

})


// Task 3
const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(() => {
            resolve({username: "Sameer", email: "s@meer.com"})
    }, 2000);
})
promiseThree.then(function (message) {
    console.log("3: " + message);
    return message.username
})
.then(function (data) {   //Chaining
    console.log("3: " + data);
})


// Task 4
const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(() => {
            resolve("4: Success")
    }, 2000);
})

async function consumingPromiseFour() {
    const response = await promiseFour
    console.log(response);
}

consumingPromiseFour()


// Task 5
const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve("Success")
        }else{
            reject("5: Error: " + error)
        }
    }, 2000);
})

async function consumingPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumingPromiseFive()


// Task 6
fetch('https://api.github.com/users/sameer07x19')
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log("6: " + data.name);
})


// Task 7
async function fetchUsingAsyncAwait() {
    try {
        let response = await fetch('https://api.github.com/users/sameer07x19')
        let data = await response.json()  //😢
        console.log("7: " + data.login);
    } catch (error) {
        console.log(error);
    }
}

fetchUsingAsyncAwait()


// Task 8
const promises = [
    new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve("Promise 1")
        }, 2000);
    }),
    new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve("Promise 2")
        }, 1000);
    }),
    new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve("Promise 3")
        }, 3000);
    })
]
Promise.all(promises)
.then(function (values) {
    console.log("8: " + values[0]);
    console.log("8: " + values[1]);
    console.log("8: " + values[2]);
})


// Task 9
const promise1 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve("9: Promise1")
    }, 500);
})
const promise2 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve("9: Promise2")
    }, 100);
})

Promise.race([promise1,promise2])
.then(function (values) {
    console.log(values);
})


// Day 11 completed 🌊
