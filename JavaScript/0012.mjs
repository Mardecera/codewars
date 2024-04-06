// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

const rgbColor = (r, g, b) => {
	const table = {
		10: "A",
		11: "B",
		12: "C",
		13: "D",
		14: "E",
		15: "F",
	}

	const rgb = [r, g, b].map((i) => (i > 255 ? 255 : i < 0 ? 0 : i))

	const toHex = (num) => {
		let hex = ""

		while (true) {
			const rest = num % 16
			const coci = Math.floor(num / 16)
			num = coci
			hex = `${table[rest] || rest.toString()}${hex}`
			if (coci === 0) break
		}

		return hex.length === 1 ? "0" + hex : hex
	}

	return rgb.reduce((acc, i) => acc + toHex(i), "")
}

const rgbColorM = (r, g, b) => {
	const rgb = [r, g, b].map((i) => (i > 255 ? 255 : i < 0 ? 0 : i))

	return rgb.reduce(
		(acc, i) => (i === 0 ? acc + "00" : acc + i.toString(16).toUpperCase()),
		""
	)
}

console.log(rgbColor(255, 255, 255), rgbColorM(255, 255, 255))
console.log(rgbColor(-1, 255, 256), rgbColorM(-1, 255, 256))
console.log(rgbColor(0, 0, 0), rgbColorM(0, 0, 0))
console.log(rgbColor(173, 255, 47), rgbColorM(173, 255, 47))
