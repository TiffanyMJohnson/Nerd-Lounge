const express = require ('express')

const router = express.Router()

const Post = require('../models/posts')


const authRequired = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    } else {
        res.send('You must be logged in')
    }
}

router.get("/", (req, res) => {
    Post.find({}, (error, allPosts) => {
        console.log(allPosts[0].fandom)
        if (error) {
            console.log(error)
        } else {
            res.render("../views/dragonballz/index.ejs", {
                posts: allPosts
            })
        }
    })
})

router.get("/new", (req, res) => {
    res.render('../views/dragonballz/new.ejs', {
    user: req.session.currentUser
    })
})

router.get('/:id', (req, res)=> {
    console.log("route working")
    Post.findById(req.params.id,  (error, foundPost) => {
        console.log(foundPost)
        res.render('../views/dragonballz/show.ejs', {
            post: foundPost, 
            // user: req.session.currentUser,
        })
    })
})

router.post('/', (req, res) => {
    console.log("route working")
    if (req.session.currentUser) {
        if (req.body.fandom === "Dragonball Z") {
            Post.create(req.body, (error, createdPost) => {
                if (error){
                    console.log(error)
                    res.send(error)
                } else { 
                    console.log(createdPost)
                    res.redirect('/dragonballz')
                }
            })
        } else {
            res.send(req.body.fandom)
        }
    } else {
        res.send ("You must be logged in to do that")
        }
})

router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id, (error, deletedPost) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/dragonballz')
        }
    })
})

router.get("/:id/edit", (req, res) => {
    Post.findById(req.params.id, (error, foundPost) => {
        if (error) {
            console.log(error)
        } else {
            res.render("../views/dragonballz/edit.ejs", {
                post: foundPost
            })
        }
    })
})

router.put("/:id", (req, res) => {
    Post.findByIdAndUpdate (
        req.params.id,
        req.body,
        {new: true},
        (error, updatedPost) => {
            if (error) {
                console.log(error)
            } else {
                res.redirect('/dragonballz')
            }
        }
    )
})

module.exports = router