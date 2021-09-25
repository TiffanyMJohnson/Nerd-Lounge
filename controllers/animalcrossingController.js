const express = require ('express')
const Post = require('../models/posts')

const router = express.Router ()

const AnimalCrossing = require('../models/posts')


const authRequired = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    } else {
        res.send('You must be logged in')
    }
}

router.get("/animalcrossing", (req, res) => {
    Post.find({}, (error, allPosts) => {
        if (error) {
            console.log(error)
        } else {
            res.render("../views/animalcrossing/index.ejs", {
                posts: allPosts
            })
        }
    })
})

router.get("/animalcrossing/new", (req, res) => {
    res.render('../views/animalcrossing/new.ejs')
})

router.get('/')