// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
// 4 kyu - Nesting Structure Comparison

Array.prototype.sameStructureAs = function (other) {
	const balanceArray = (array) =>
		JSON.stringify(array).replace(/(\"\[\")|(\"\]\")|([0-9])/g, "1")

	return balanceArray(this) === balanceArray(other)
}

console.log([1, 1, 1].sameStructureAs([2, 2, 2]))
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]))
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]))
console.log([1, [1, 1]].sameStructureAs([2, [2]]))
console.log([[[], []]].sameStructureAs([[[], []]]))
console.log([[[], []]].sameStructureAs([[1, 1]]))
console.log([1, [[[1]]]].sameStructureAs([2, [[[2]]]]))
console.log([].sameStructureAs(1))
console.log([].sameStructureAs({}))
console.log([1, "[", "]"].sameStructureAs(["[", "]", 1]))
console.log([1, 2].sameStructureAs([[3], 3]))
