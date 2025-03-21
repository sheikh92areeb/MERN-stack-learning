use("crudDb")

db.createCollection("courses")

db.courses.insertOne({
    name:"Web Development",
    price:200,
    assignments:12,
    projects:5
})

let a = db.courses.find({price:200})

console.log(a.toArray())