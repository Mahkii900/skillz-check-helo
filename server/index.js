require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.post('/auth/register', ctrl.registerUser) //registers user
app.post('/auth/login', ctrl.login) //logs in a user
app.get('/search', ctrl.getAllPosts) //gets all posts
app.get('/posts/:postid', ctrl.getAPost) //gets one post
app.post('/posts/new', ctrl.createPost) //creates a post
app.post('/auth/logout', ctrl.logout) //logs out user
app.get('/auth/me', ctrl.getUserInfo) //gets user info

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`))
})