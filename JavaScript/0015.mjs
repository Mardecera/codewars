// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(number) {
	const romanos = {
		1: "I",
		5: "V",
		10: "X",
		50: "L",
		100: "C",
		500: "D",
		1000: "M",
	}

	if (number in romanos) return romanos[number]

	const $ = (num) => {
		if (romanos[num / 2]) return romanos[num / 2].repeat(2)
		if (romanos[num / 3]) return romanos[num / 3].repeat(3)

		for (let value in romanos)
			if (romanos[Number(value) + num])
				return romanos[Number(value)] + romanos[Number(value) + num]

		if (num < 10) return `V${"I".repeat(num - 5)}`
		if (num < 100) return `L${"X".repeat(num / 10 - 5)}`
		if (num < 1000) return `D${"C".repeat(num / 100 - 5)}`
	}

	return `${number}`
		.split("")
		.reverse()
		.map((value, index) => Number(value + "0".repeat(index)))
		.filter((value) => value !== 0)
		.reverse()
		.map((value) => romanos[value] ?? $(value))
		.join("")
}

console.log(solution(3129))
