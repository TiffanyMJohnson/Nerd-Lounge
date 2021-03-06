//setup
const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

const methodOverride = require('method-override')
const session = require("express-session")

const Post = require('./models/posts')

const mongoose = require('mongoose')

const mongoURI = process.env.MONGODBURI

const db = mongoose.connection

mongoose.connect(mongoURI, {
    useNewURLParser:true,
    useUnifiedTopology:true
}, () => {
    console.log('database connected')
})

db.on('error', (error) => {
    console.log("ERROR:", error)
})
db.on("connected", () => {
    console.log("mongo connected")
})
db.on("discconnected", () => {
    console.log("mongo disconneted")
})

//middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

const SESSION_SECRET = process.env.SESSION_SECRET
console.log("here's SESSION_SECRET")
console.log(SESSION_SECRET)

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//app
const userController = require("./controllers/userController")
app.use('/users', userController)

const animalcrossingController = require("./controllers/animalcrossingController")
app.use('/animalcrossing', animalcrossingController)

const dragonballzController = require("./controllers/dragonballzController")
app.use('/dragonballz', dragonballzController)

const harrypotterController = require("./controllers/harrypotterController")
app.use('/harrypotter', harrypotterController)

const marvelController = require("./controllers/marvelController")
app.use('/marvel', marvelController)

const starwarsController = require("./controllers/starwarsController")
app.use('/starwars', starwarsController)


app.get('/', (req, res) => {
    res.render("welcome.ejs")
})

app.get('/home', (req, res) => {
    res.render("home.ejs")
})

app.listen(PORT, ()=> {
    console.log("Server is Running")
})