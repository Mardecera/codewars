// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

import Test from "./Testing.mjs"

const arrayDiff = (a, b) => a.filter((i) => !b.includes(i))

Test.myFunction = arrayDiff

Test.doTest([[1, 2], [1]], [2])
Test.doTest([[1, 2, 2], [1]], [2, 2])
Test.doTest([[1, 2, 2], [2]], [1])
Test.doTest([[1, 2, 2], []], [1, 2, 2])
Test.doTest([[], [1, 2]], [])
Test.doTest([[1, 2, 3], [1, 2]], [3])