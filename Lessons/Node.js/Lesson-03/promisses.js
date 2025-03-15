import fs from "fs/promises"

let a = await fs.readFile("text2.txt")

let b = await fs.appendFile("text2.txt", "\nThis is Amazing code")

console.log(a.toString(), b)