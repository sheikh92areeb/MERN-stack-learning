var slugify = require("slugify")

let a = slugify("some text")
console.log(a)

let b = slugify("some text", "_")
console.log(b)