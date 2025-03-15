import path from "path"

let myPath = "G:\\MERN-stack-learning\\Node.js\\Lessons\\Lesson-03\\text2.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\ali.txt"))