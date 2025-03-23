const express = require('express');
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

mongoose.connect("mongodb://localhost:27017/company")

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: "FOO" });
})

app.get('/generate', async (req, res) => {AbortController
    // Generate Random Data
    let randomName = ["Areeb", "Kamran", "Saad", "Umer"]
    let randomLang = ["Python", "JS", "C++", "Java"]
    let randomCities = ["Dubai","New York", "London", "Karachi"]
    for (i = 0; i < 10; i++){
        let e = await Employee.create({
            name:"Areeb",
            salary:450000,
            language: "Python",
            city: "Karachi",
            isManager: true
        })
        console.log(e)
    }
    res.render('index', { foo: "FOO" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
