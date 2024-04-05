const Test = {
	myFunction: function () {},

	doTest: function (data = [], spectResult) {
		let response

		switch (data.length) {
			case 1:
				response = this.myFunction(data[0])
				break
			case 2:
				response = this.myFunction(data[0], data[1])
			default:
				break
		}

		response = response.toString() === spectResult.toString()
		console.log(response ? "✅ PASS" : "❌ FAIL")
	},
}

export default Test
