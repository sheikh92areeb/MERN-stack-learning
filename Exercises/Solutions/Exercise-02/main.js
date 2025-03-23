const express = require('express');
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

mongoose.connect("mongodb://localhost:27017/company")

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const getRandom = (arr) =>{
    let rno = Math.floor(Math.random() * arr.length);
    return arr[rno]
}

app.get('/', async (req, res) => {
    const employees = await Employee.find();
    res.render('index', { employees });
})

app.get('/generate', async (req, res) => {
    // Clear the Collection 
    await Employee.deleteMany({})
    // Generate Random Data
    let randomName = ["Areeb", "Kamran", "Saad", "Umer"]
    let randomLang = ["Python", "JS", "C++", "Java"]
    let randomCities = ["Dubai","New York", "London", "Karachi"]
    for (i = 0; i < 10; i++){
        let e = await Employee.create({
            name: getRandom(randomName),
            salary: Math.floor(Math.random() * 40000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.floor((Math.random() * 2)) == 0)?true:false
        })
        console.log(e)
    }
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
