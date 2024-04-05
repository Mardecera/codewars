// https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

import Test from "./Testing.mjs"

// BEST SOLUTION
// function dirReduc(arr) {
//   var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//   while (pattern.test(str)) str = str.replace(pattern,'');
//   return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
// }

const dirReduc = (arr = []) => {
	let acc = 0
	while (true) {
		if (
			(arr[acc] === "NORTH" && arr[acc + 1] === "SOUTH") ||
			(arr[acc] === "SOUTH" && arr[acc + 1] === "NORTH") ||
			(arr[acc] === "WEST" && arr[acc + 1] === "EAST") ||
			(arr[acc] === "EAST" && arr[acc + 1] === "WEST")
		) {
			arr.splice(acc, 2)
			acc = 0
			continue
		} else if (acc >= arr.length) break
		acc++
	}
	return arr
}

Test.myFunction = dirReduc

Test.doTest(
	[["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]],
	["WEST"]
)
Test.doTest(
	[["NORTH", "WEST", "SOUTH", "EAST"]],
	["NORTH", "WEST", "SOUTH", "EAST"]
)
Test.doTest([["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]], [])
