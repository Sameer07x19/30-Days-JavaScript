// Task 1
function taskOne() {
    try {
        console.log(name)
    } catch (error) {
        console.log("1: " + error.message);
    }
}
taskOne()


// Task 2
function taskTwo (num1,num2){
    try {
        let answer
        answer = num1 / num2
        if (answer == Infinity) {
            throw new Error("Denominator can't be zero");
        }else{
            console.log("2: " + answer);
        }
    } catch (error) {
        console.log("2: " + error.message);
    }
}
taskTwo(10,0)


// Task 3
try {
    console.log(name);
}
catch (error) {
    console.log("3: " + error.message + " {Error block}");
    // console.log(name);
}
finally{
    //This will eventually complete at the end even if the catch block got in into some error
    console.log("3: Completed" + " {Finally block}");
}


// Task 4
class CustomError extends Error {
    constructor(message) {
      super(message);
    }
  }
function throwCustomError() {
    try {
      throw new CustomError("This is a custom error.");
    } catch (error) {
      console.log("4: Caught custom error:", error.message);
    }
  }

  throwCustomError();


//   Task 5
function validationInput (input) {
    if (input == ""){
        throw new CustomError("Invalid Input")
    }else{
        console.log("5: " + input);
    }
}
try{
    validationInput("")
}
catch (error) {
    console.log("5: " + error.message);
}


// Task 6
const taskSix = new Promise(function (resolve,reject){
    // Here chances are 50-50
    let randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber > 50) {
        resolve("Success")
    }else{
        reject("Failed")
    }
})

taskSix
.then(function (message) {
    console.log("6: " + message);
})
.catch(function (error) {
    console.log("6: " + error);
})


// Task 7
async function taskSeven() {
    try {
        const response = await taskSix
        console.log("7: " +  response);
        
    } catch (error) {
        console.log("7: " + error);
    }
}
taskSeven()


// Task 8
fetch('http://sameer.com')
.catch(function (error){
    console.log("8: " + error.message)
})


// Task 9
async function lastTask() {
    try {
        let response = await fetch('http://sameer.com')
        console.log(response);
    } catch (error) {
        console.log("9: " + error.message);
        
    }
}
lastTask()

// Day 12 Completed 🌊