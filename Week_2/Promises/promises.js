// A Promise is basically JavaScript’s way of cleaning up the mess created by nested callbacks.
// It represents a value that will be available later (asynchronous result).

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)


