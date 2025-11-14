# 💡 Complete JavaScript Guide (Beginner → Advanced)

Welcome to your full JavaScript learning file — from zero to advanced concepts.  
This guide is written to **teach you step-by-step**, with examples and explanations.

---

## 🧠 1. What is JavaScript?

**JavaScript (JS)** is a high-level, interpreted programming language used to make websites **interactive** and **dynamic**.

- HTML → defines structure  
- CSS → defines style  
- JavaScript → defines behavior  

Example:
```html
<button onclick="alert('Hello!')">Click Me</button>
```

✅ When you click the button, JavaScript runs and shows a popup message.

---

## ⚙️ 2. How JavaScript Works

- JS runs inside a **browser engine** (like V8 in Chrome).  
- It’s **interpreted** (not compiled).  
- Executes **line by line**.  
- Uses a **single-threaded** model with an **event loop** for async code.

---

## 🧩 3. JavaScript Syntax & Basics

### ➤ Variables

Used to store values.

```js
let name = "Kartik";  // modern way
const PI = 3.14;      // constant
var age = 21;         // old way (avoid)
```

### ➤ Data Types

| Type | Example | Description |
|------|----------|-------------|
| String | `"Hello"` | Text |
| Number | `42` | Number |
| Boolean | `true` | True/False |
| Array | `[1, 2, 3]` | List of values |
| Object | `{name: "Kartik", age: 21}` | Key-value pairs |
| Null | `null` | Empty value |
| Undefined | `let x;` | Not assigned |

### ➤ Operators

```js
let a = 10 + 5;   // Arithmetic
let b = a == 15;  // Comparison
let c = a > 5 && a < 20; // Logical
```

---

## 🧭 4. Control Flow

### ➤ Conditional Statements

```js
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### ➤ Switch Statement

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend soon!");
    break;
  default:
    console.log("Another day");
}
```

---

## 🔁 5. Loops

### ➤ For Loop
```js
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

### ➤ While Loop
```js
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
```

### ➤ For...of
```js
let arr = [10, 20, 30];
for (let num of arr) {
  console.log(num);
}
```

---

## 🔧 6. Functions

Reusable blocks of code.

```js
function greet(name) {
  console.log("Hello " + name);
}
greet("Kartik");
```

### ➤ Arrow Function
```js
const add = (a, b) => a + b;
console.log(add(3, 5));
```

---

## 🧱 7. Objects

Objects store related data together.

```js
let user = {
  name: "Kartik",
  age: 21,
  isStudent: true,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

console.log(user.name);
user.greet();
```

---

## 🧮 8. Arrays

List of items.

```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple

fruits.push("grape");   // add at end
fruits.pop();            // remove last
```

### ➤ Useful Array Methods
```js
let numbers = [1, 2, 3, 4];

console.log(numbers.map(x => x * 2));  // [2,4,6,8]
console.log(numbers.filter(x => x > 2)); // [3,4]
console.log(numbers.reduce((a, b) => a + b, 0)); // 10
```

---

## ⚡ 9. DOM Manipulation (Browser)

Change HTML/CSS dynamically.

```html
<h2 id="title">Hello</h2>
<button onclick="changeText()">Click</button>

<script>
  function changeText() {
    document.getElementById("title").innerText = "Text Changed!";
  }
</script>
```

---

## 🧵 10. Events

Handle user actions.

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## ⏳ 11. Asynchronous JavaScript

### ➤ setTimeout / setInterval

```js
setTimeout(() => console.log("Hello after 2 sec"), 2000);
setInterval(() => console.log("Repeating every 3 sec"), 3000);
```

### ➤ Promises

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 2000);
});

promise.then(msg => console.log(msg));
```

### ➤ Async/Await

```js
async function fetchData() {
  let response = await fetch("https://api.github.com/users");
  let data = await response.json();
  console.log(data);
}
fetchData();
```

---

## 🧰 12. Intermediate Topics

### ➤ Destructuring
```js
let person = { name: "Kartik", age: 21 };
let { name, age } = person;
console.log(name, age);
```

### ➤ Spread and Rest
```js
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr);

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));
```

### ➤ Modules (ES6)
```js
// file1.js
export const greet = () => console.log("Hello");

// file2.js
import { greet } from "./file1.js";
greet();
```

---

## 🧠 13. Advanced JavaScript Concepts

### ➤ Closures
A function that remembers its scope even after execution.
```js
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let add = counter();
console.log(add()); // 1
console.log(add()); // 2
```

### ➤ Callbacks
```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData(msg => console.log(msg));
```

### ➤ Prototype & Inheritance
```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hi " + this.name);
};

let p1 = new Person("Kartik");
p1.greet();
```

### ➤ Classes
```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(this.brand + " started!");
  }
}

let car = new Car("Tesla");
car.start();
```

---

## 🌐 14. Fetch API (HTTP Requests)
```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

---

## 🧩 15. Error Handling
```js
try {
  let x = undefinedVariable;
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This runs always");
}
```

---

## 🚀 16. JavaScript in Real Projects

- **Frontend:** React, Vue, Angular  
- **Backend:** Node.js, Express  
- **Databases:** MongoDB, Firebase  
- **Build Tools:** Webpack, Vite  
- **Version Control:** Git & GitHub

---

## ✅ Final Advice

- Practice daily — code > theory.  
- Debug your own errors — it builds real understanding.  
- Build small projects (To-Do App, Weather App, Quiz App).  
- Learn **Node.js** next for backend development.  

---

# 🏁 Summary Table

| Level | Key Topics |
|--------|-------------|
| Beginner | Variables, Data Types, Loops, Functions |
| Intermediate | Arrays, Objects, DOM, Events |
| Advanced | Promises, Async/Await, Closures, Classes, Modules |

# ✅ Task 
```
Try cloning a website you like.
```