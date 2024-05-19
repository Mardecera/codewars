// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

const duplicateEncode = (word) => {
	word = word.toLowerCase()
	let par = ""

	for (let char of word) {
		const countChar = word.match(new RegExp(`[${char}]`, "g")).length
		par = par + `${countChar === 1 ? "(" : ")"}`
	}

	return par
}

console.log(duplicateEncode("recede"))
