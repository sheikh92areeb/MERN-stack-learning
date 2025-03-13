const express = require('express')
const blog = require('./routes/blogs')
const shop = require('./routes/shop')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use("/blog", blog)
app.use("/shop", shop)

app.get('/', (req, res) => {
    console.log("It is Get Request")
    res.send('Hello World!')
}).post('/', (req, res) => {
    console.log("It is Post Request")
    res.send('Hello World Post')
})


app.put('/', (req, res) => {
    console.log("It is Put Request")
    res.send('Hello World Put')
})

app.get('/index', (req, res) => {
    console.log("It is Index Page")
    res.sendFile('tamplates/index.html', {root:__dirname})
})

app.get('/api', (req, res) => {
    res.json({a:1, b:2, c:3, name:["areeb", "Ali"]})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})