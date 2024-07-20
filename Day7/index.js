
// Task 1 
const book = {
    title: "Hello",
    author: "World",
    year: 2019
}
// console.log(book);


// Task 2
// console.log(book.title,book.author);


// Task 3
const books = {
    title: "Hello World",
    author: "Sameer",
    year: 2019,
    description: function(){
        return `${this.title} by ${this.author}`
    }
}
// console.log(books.description());


// Task 4
const bookYear = {
    title: "Hello World",
    author: "Sameer",
    year: 2019,
    update: function(year){
         return this.year = year 
    }
}
bookYear.update(2020)
// console.log(bookYear)


// Task 5
const library = {
    name: "My library",
    Books : [
      {
        title : "Fundamental of Comupter",
        author : "Sameer Sayyed"
      },
      {
        title : "Advance Comupter",
        author : "Mustafa Shaikh"
      },
      {
        title : "Fundamental of Math",
        author : "Nasir Shaikh"
      },
      {
        title : "Advance Math",
        author : "Sahil Ansari"
      }
      ]
  }
// console.log(library);


// Task 6
// console.log(library.name);
// console.log(library.Books.map( (a) => {
//     return a.title
// }));


// Task 7
const library2 = {
    name: "My second library",
    Books : [
        {
          title : "Fundamental of Comupter",
          author : "Sameer Sayyed",
          year: 2020
        },
        {
          title : "Advance Comupter",
          author : "Mustafa Shaikh",
          year: 2021
        },
        {
          title : "Fundamental of Math",
          author : "Nasir Shaikh",
          year: 2022
        },
        {
          title : "Advance Math",
          author : "Sahil Ansari",
          year: 2023
        }
        ],
    method: function () { 
        this.Books.map((a) => console.log(`Books Title : ${a.title} and Published Year : ${a.year}`))
     }
  }

// library2.method()

// Task 8
for (const property in book) {
  // console.log(`${property} : ${book[property]}`);
}

// Task 9 
console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book)); // Extra

// Day 7 Completed 🌊