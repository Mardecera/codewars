// c

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

import Test from "./Testing.mjs"

const domainName = (url) => {
	if (url.includes("http" && "www")) return url.split(".")[1]
	if (url.includes("http")) return url.split("//")[1].split(".")[0]
	return url.split(".")[0]
}

Test.myFunction = domainName

Test.doTest("http://google.com", "google")
Test.doTest("http://google.co.jp", "google")
Test.doTest("www.xakep.ru", "xakep")
Test.doTest("https://youtube.com", "youtube")
Test.doTest("http://www.6vg3n.com/warez/", "6vg3n")
