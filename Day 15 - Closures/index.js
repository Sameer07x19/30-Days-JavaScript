//Task 1

let showName = function (){
    let name = "Sameer"
    function returnName(){  
        return name
    }
    return returnName // returning a function
}

let getName = showName() // getting a func as a return value

console.log(getName()); // executing that func that was returned to the getName variable 


//Task 2

let incrementCounter = (function(){
    let counter = 0 
    function counterFunction (){
        return counter += 1
    }
    return counterFunction
})()

console.log(incrementCounter());


//Task 3

let uniqueIdGenerator = function generateId (){
    let id = 0

    function increment(){
        id++
        return id
    }
    return increment
}

let generator1 = uniqueIdGenerator()
console.log(generator1());
console.log(generator1());


//Task 4

let getMyName = function (name){
    function greet(){  
        return `Hello ${name}`
    }
    return greet
}

let greetSameer = getMyName("Sameer")
console.log(greetSameer());


//Task 5

let functionArray = []

for (let i = 0; i < 5; i++) {
    functionArray.push(
        (function (index){
            return function () {
                console.log(index);
            }
        })(i)
    )
}

functionArray[0]();
functionArray[1]();


//Task 6

function itemManager (){
    let items = []
    return {
        addItem: function (item) {
            items.push(item)
            console.log(`Added ${item}`)
        },
        listItem: function(){
            console.log("items: ", items);
        },
        removeItem: function(item){
            let index = items.indexOf(item)
            if(index !== -1){
                items.splice(index,1)
                console.log(`Removed: ${item}`);
            }else{
                console.log("Item not found!");
            }
        }
    }
}

let itemManager1 = itemManager()
itemManager1.addItem("apple")
itemManager1.addItem("mango")
itemManager1.listItem()
itemManager1.removeItem("apple")
itemManager1.listItem()


//Task 7

function memorize(func) {
    let data = {}
    return function (...args) {
        let uniqueKey = JSON.stringify(args)
        if(data[uniqueKey] !== undefined){
            console.log(`Fetching: ${uniqueKey}`);
            return data[uniqueKey]
        }else{
            console.log(`Computing for :${uniqueKey}`);
            let result = func(...args)
            data[uniqueKey] = result
            return result
        }
    }
}
function add(a,b) {
    return a+b
}

let memorizeAdd = memorize(add)
console.log(memorizeAdd(2,3)); // computing data
console.log(memorizeAdd(2,3)); // fetching data that was stored 


//Task 8
// 5 --> 5 x 4 x 3 x 2 x 1
function memoizeFactorial() {
    let data = {}
    return function factorial(num){
        if(num in data){
            console.log(`Fetching: ${num}`);
            return data[num]
        }
        if(num == 0 || num == 1){
            data[num] = 1
            return 1
        }
        console.log(`Computing: ${num}`);
        let result = num * factorial(num - 1)
        data[num] = result
        return result 
    }
    
}
let facto1 = memoizeFactorial()
console.log(facto1(5));
console.log(facto1(5));


// Day 15 Completed 🌊