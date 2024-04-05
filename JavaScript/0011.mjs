// https://www.codewars.com/kata/5263c6999e0f40dee200059d/javascript

import Test from "./Testing.mjs"

const getPINs = (observed) => {
	const NumToCoords = {
		1: "0,0",
		2: "0,1",
		3: "0,2",
		4: "1,0",
		5: "1,1",
		6: "1,2",
		7: "2,0",
		8: "2,1",
		9: "2,2",
		0: "3,1",
	}

	const CoordToNum = {
		"0,0": "1",
		"0,1": "2",
		"0,2": "3",
		"1,0": "4",
		"1,1": "5",
		"1,2": "6",
		"2,0": "7",
		"2,1": "8",
		"2,2": "9",
		"3,1": "0",
	}

	const board = [
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
		[undefined, "0", undefined],
	]

	let posibilities = []

	for (let value of observed) {
		const x = Number(NumToCoords[Number(value)][0])
		const y = Number(NumToCoords[Number(value)][2])

		const ccOrigin = `${x},${y}`
		const ccUp = `${x - 1},${y}`
		const ccDown = `${x + 1},${y}`
		const ccLeft = `${x},${y - 1}`
		const ccRight = `${x},${y + 1}`

		const nOrigin = CoordToNum[ccOrigin]
		const nUp = ccUp in CoordToNum ? CoordToNum[ccUp] : []
		const nDown = ccDown in CoordToNum ? CoordToNum[ccDown] : []
		const nLeft = ccLeft in CoordToNum ? CoordToNum[ccLeft] : []
		const nRight = ccRight in CoordToNum ? CoordToNum[ccRight] : []

		posibilities = [
			...posibilities,
			[nOrigin, nUp, nDown, nLeft, nRight].filter(
				(i) => typeof i !== "object"
			),
		]
	}

  // if (observed.length === 1) return posibilities[0]

	console.log(posibilities)

	return true
}

Test.myFunction = getPINs

Test.doTest(["8"], ["5", "7", "8", "9", "0"])
Test.doTest(["11"], ["11", "22", "44", "12", "21", "14", "41", "24", "42"])
Test.doTest(
	["369"],
	[
		"339",
		"366",
		"399",
		"658",
		"636",
		"258",
		"268",
		"669",
		"668",
		"266",
		"369",
		"398",
		"256",
		"296",
		"259",
		"368",
		"638",
		"396",
		"238",
		"356",
		"659",
		"639",
		"666",
		"359",
		"336",
		"299",
		"338",
		"696",
		"269",
		"358",
		"656",
		"698",
		"699",
		"298",
		"236",
		"239",
	]
)
