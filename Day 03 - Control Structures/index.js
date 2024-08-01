// Task 1
function checkNumber(num){
    if(num == 0){
        console.log("The number is 0")
    }else if(num > 0){
        console.log("The number is Positive");
    }else{
        console.log("The number is Negative");
    }
}
// checkNumber(0)

// Task 2
function voteEligibility(age) {
    if(age <= 0){
        console.log("Invalid age");
    }else if(age >= 18){
        console.log("Eligible");
    }else{
        console.log("Not Eligible");
    }
  }
// voteEligibility(19)

// Task 3
function checkLargest(num1,num2,num3) {
    if(num1 > num2 && num1 > num3){
        console.log(`${num1} is the largest number.`);
    }
    else if(num2 > num3){
        console.log(`${num2} is the largest number`);
    }
    else{
        console.log(`${num3} is the largest number`);
    }
}
// checkLargest(6,-2,3)

// Task 4
switch (new Date().getDay()) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Sunday");
        break;
}

// Task 5
let marks = 94;
switch (true) {
    case (marks >= 85):
        console.log("A");
        break;
    case (marks >= 70):
        console.log("B");
        break;
    case (marks >= 60):
        console.log("C");
        break;
    case (marks >= 40):
        console.log("D");
        break;
    case (marks >= 35):
        console.log("E");
        break;
    default:
        console.log("F");
        break;
}

// Task 6
let num = 3
console.log((num % 2 == 0) ? "Even" : "Odd");

// Task 7
function leapYear (year){
    if(year % 4 === 0){
        if(year % 100 === 0){
           if(year % 400 === 0){
            console.log("It is a Leap year");
           }
           else{
            console.log("Not a Leap year");
           }
        }
        else{
            console.log("It is a leap year")
        }
    }
    else{
        console.log("Not a Leap Year");
    }
}
// leapYear(2020)

// Day 3 Completed 🌊
