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
            res.render("../views/marvel/index.ejs", {
                posts: allPosts
            })
        }
    })
})

router.get("/new", (req, res) => {
    res.render('../views/marvel/new.ejs', {
    user: req.session.currentUser
    })
})

router.get('/:id', (req, res)=> {
    console.log("route working")
    Post.findById(req.params.id,  (error, foundPost) => {
        console.log(foundPost)
        res.render('../views/marvel/show.ejs', {
            post: foundPost, 
            // user: req.session.currentUser,
        })
    })
})

router.post('/', (req, res) => {
    console.log("route working")
    if (req.session.currentUser) {
        if (req.body.fandom === "Marvel") {
            Post.create(req.body, (error, createdPost) => {
                if (error){
                    console.log(error)
                    res.send(error)
                } else { 
                    console.log(createdPost)
                    res.redirect('/marvel')
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
            res.redirect('/marvel')
        }
    })
})

router.get("/:id/edit", (req, res) => {
    Post.findById(req.params.id, (error, foundPost) => {
        if (error) {
            console.log(error)
        } else {
            res.render("../views/marvel/edit.ejs", {
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
                res.redirect('/marvel')
            }
        }
    )
})

module.exports = router