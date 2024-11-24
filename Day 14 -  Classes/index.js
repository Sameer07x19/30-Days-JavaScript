//Task 1

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `Hello ${this.name}`
    }
    static greet(){
      return `Hello Sameer`
    }
}

let person1 = new Person("Sameer","19")
console.log(person1.greeting());

//Task 2

Person.prototype.updateAge= function(age){
    this.age = age
}
person1.updateAge(21)
console.log(person1);


//Task 3

class Student extends Person{

    static count = 0 
    constructor(name,age,studentId){
        super(name,age) // super keyword is important to inherit parent class properties
        this.studentId = studentId
        Student.count++
    }
    id(){
        return this.studentId
    }
    
}

let student1 = new Student("Sam",20,1)
console.log(student1);
console.log(student1.greeting()); // using parent class methods 
console.log(student1.id()); 


//Task 4

Student.prototype.greeting = function (){
  console.log(`Hello ${this.name}, your id is ${this.studentId}`);
}

student1.greeting()


//Task 5

//added a static method above in Person class
console.log(Person.greet()); //calling the static method 


//Task 6

//added a static property above in Student class
let student2 = new Student("rohan",21,2)
let student3 = new Student("ramesh",22,3)
let student4 = new Student("binod",23,4)
console.log(Student.count);


//Task 7

class PersonData {
  constructor(firstname,lastname){
    this.firstname = firstname
    this.lastname = lastname
  }
  get name(){  // using getter
    return `${this.firstname} ${this.lastname}`
  }
  set updateFirstname({firstname,lastname}){
    this.firstname = firstname
    this.lastname = lastname
  }
}

let data1 = new PersonData("Sam","Dev")
console.log(data1.name);


//Task 8

data1.updateFirstname = {firstname:"Sameer",lastname: "Sayyed"}
console.log(data1.name);


//Task 9

class Account {
  #balance

  constructor(balance){
    this.#balance = balance
  }

  showBalance(){
    return this.#balance
  }
  depositMoney(money){
    this.#balance += money
  }

  withdrawMoney(money){
    this.#balance -= money
  }
}


//Task 10

let demoAccount = new Account(1000)
console.log(demoAccount.showBalance());
demoAccount.depositMoney(200)
console.log(demoAccount.showBalance());
demoAccount.withdrawMoney(100)
console.log(demoAccount.showBalance());


// Day 14 Completed 🌊