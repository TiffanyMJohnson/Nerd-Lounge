const express = require ('express')

const router = express.Router()

const Post = require('../models/posts')


// const authRequired = (req, res, next) => {
//     if (req.session.currentUser) {
//         next()
//     } else {
//         res.send('You must be logged in')
//     }
// }

router.get("/animalcrossing", (req, res) => {
    Post.find({}, (error, allPosts) => {
        if (error) {
            console.log(error)
        } else {
            res.render("/animalcrossing/index.ejs", {
                posts: allPosts
            })
        }
    })
})

router.get("/animalcrossing/new", (req, res) => {
    res.render('/animalcrossing/new.ejs')
})

router.get('animalcrossing/:id', (req, res)=> {
    Post.findById(req.params.id, authRequired, (error, foundPost) => {
        console.log(foundPost)
        res.render('animalcrossing/show.ejs', {post: foundPost})
    })
})

router.post('/', (req, res) => {
    if (req.session.currentUser) {
        if (req.body.fandom === "animalcrossing") {
            Post.create(req.body, (error, createdPost) => {
                if (error){
                    console.log(error)
                    res.send(error)
                } else { 
                    console.log(createdPost)
                    res.redirect('/animalcrossing')
                }
        })
    } else {
        res.send ("You must be logged in to do that")
        }
    }
})


module.exports = router