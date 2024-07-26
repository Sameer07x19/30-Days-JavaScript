
// Task 1
let first = document.getElementById("first")
// first.textContent = "DOM"
first.style.backgroundColor = "yellow"


// Task 2
let one = document.getElementsByClassName("one")[0]
one.style.color = "blue"


// Task 3
let newDiv = document.createElement('div')
// newDiv.textContent = "Div created successfully"
// Optimised approach
let text = document.createTextNode('Div created successfully 💪')
newDiv.appendChild(text)
document.body.appendChild(newDiv)


// Task 4
let list = document.querySelector('ul')
let listItem = document.createElement('li')
listItem.innerText = "New list"
list.appendChild(listItem)


// Task 5
let removedElement = document.querySelector('.removed')
removedElement.remove()


// Task 6
let removeLastChild = document.querySelector('.removeLastChild')
removeLastChild.lastElementChild.remove()


// Task 7
let attributeChange = document.querySelector('img')
// console.log("before" + attributeChange)
attributeChange.setAttribute('alt','test')
// console.log("after" + attributeChange)


// Task 8
first.setAttribute('class','classAdded')
// document.body.appendchild(attributeChange)
first.removeAttribute('class','classAdded')


// Task 9
let eventHandling = document.querySelector('.eventHandling')
eventHandling.firstElementChild.addEventListener("click", () => {
  eventHandling.lastElementChild.textContent = "World"
})


// Task 10
let hoverClass = document.querySelector('.hover')
hoverClass.addEventListener('mouseover', () =>{
  hoverClass.style.border = "4px solid brown"
})

// Day 9 Completed 🌊