// https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript

import Test from "./Testing.mjs"

const narcissistic = function (value) {
	return (
		value
			.toString()
			.split("")
			.reduce(
				(acc, d) => acc + Number(d) ** value.toString().length,
				0
			) === value
	)
}

Test.myFunction = narcissistic

Test.doTest([153], true)
Test.doTest([1652], false)
