// https://www.codewars.com/kata/5263c6999e0f40dee200059d/javascript

const getPINs = (observed) => {
	const adjacents = [
		["0", "8"],
		["1", "2", "4"],
		["1", "2", "3", "5"],
		["2", "3", "6"],
		["1", "4", "5", "7"],
		["2", "4", "5", "6", "8"],
		["3", "5", "6", "9"],
		["4", "7", "8"],
		["5", "7", "8", "9", "0"],
		["6", "8", "9"],
	]

	const posibilities = observed.split("").map((i) => adjacents[Number(i)])

	return posibilities.reduce((curr, next) =>
		curr.flatMap((i) => next.map((j) => i + j))
	)
}

console.log(getPINs("8"))
console.log(getPINs("11"))
console.log(getPINs("13"))
console.log(getPINs("001"))
console.log(getPINs("369"))
