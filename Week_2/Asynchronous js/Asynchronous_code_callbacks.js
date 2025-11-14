// Let’s look at the code to read from a file asynchronously. Here, we pass in a function as an argument. This function is called a callback since the function gets called back when the file is read 

const fs = require('fs')

function afterFileRead(err, contents) {
    console.log(contents);
}

fs.readFile("a.txt", "utf-8", afterFileRead)

// SetTimeout

// setTimeout is another asynchronous function that executes a certain code after some time

function run() {
	console.log("I will run after 2s");
}

setTimeout(run, 2000);
console.log("I will run immedietely");