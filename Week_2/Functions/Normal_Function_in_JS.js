// Find sum of two Numbers

function sum(a, b) {
	return a + b;
}

const ans = sum(4, 5)
console.log(ans);

// Find sum from 1 to a Number

function sum2(n) {
	let ans2 = 0;
	for (let i = 1; i <= n; i++) {
		ans2 = ans2 + i
	}
	return ans2;
}

const ans3 = sum2(50);
console.log(ans3);