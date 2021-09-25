const express = require ('express')

const router = express.Router ()

const HarryPotter = require('../models/posts')


const authRequired = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    } else {
        res.send('You must be logged in')
    }
}