// Task 1
let button = document.querySelector(".one");
let para = document.querySelector(".para");
button.addEventListener("click", () => {
  para.textContent = "Hello";
});

// Task 2
let img = document.querySelector(".myImage");
let imgButton = document.querySelector(".imgBtn");
imgButton.addEventListener("dblclick", () => {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
});

// Task 3
imgButton.addEventListener("mouseover", () => {
  imgButton.style.backgroundColor = "Red";
});

// Task 4
imgButton.addEventListener("mouseout", () => {
  imgButton.style.backgroundColor = "";
});

// Task 5
document.addEventListener("keydown", (event) => {
  // console.log(event.key);
});

// Task 6
let inputElement = document.querySelector(".inputElement");
let currentValue = document.querySelector(".currentValue");
inputElement.addEventListener("keyup", () => {
  currentValue.innerHTML = inputElement.value;
});

// Task 7
let submitform = document.querySelector("#submitform");
let name = document.querySelector("#name");
let email = document.querySelector("#email");

submitform.addEventListener("submit", (event) => {
  event.preventDefault();

  let dataObj = new FormData(submitform);
  // console.log(dataObj);
  let formObj = {};
  dataObj.forEach((value, key) => {
    formObj[key] = value;
  });
  console.log(formObj);
});

// Task 8
const changeEvent = document.getElementById("changeEvent");
const selectedCar = document.getElementById("selectedCar");
changeEvent.addEventListener("change", () => {
  selectedCar.innerHTML = changeEvent.value;
});


// Task 9
let list = document.querySelector("#list")
list.addEventListener('click', (e) => {
  console.log(e.target.tagName)
  console.log(e.target.innerHTML)
})


// Task 10
let parent = document.querySelector('.parent')
let addList = document.querySelector('#addList')
let addItem = document.querySelector('.addItem')

addItem.addEventListener('click', () => {
  let newList = document.createElement('li')
  newList.innerHTML = 'new Item'
  addList.appendChild(newList)
})

parent.addEventListener('click', (e) => {
  if(e.target.matches('li')){
    console.log(e.target.textContent)
  }
})

// Day 10 Completed 🌊