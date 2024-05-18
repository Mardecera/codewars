// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
	word = word.toLowerCase()
	let par = ""
	for (let val of word) {
		if (word.match(new RegExp(`[${val}]`, "g")).length === 1)
			par = par + "("
		else par = par + ")"
	}
	return par
}
console.log(duplicateEncode("recede"))
