// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// BEST SOLUTION: XOR operator
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

const A = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]

const findOdd = (A) => {
	let only = Array.from(new Set(A))
	let onlyCount = []

	for (let i of only)
		onlyCount.push(A.reduce((acc, v) => (v === i ? acc + 1 : acc), 0))

	return only[onlyCount.indexOf(...onlyCount.filter((i) => i & 1))]
}

console.log(findOdd(A))
