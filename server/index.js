require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())

app.post('/auth/register', ctrl.registerUser) //registers user
app.post('/auth/login', ctrl.login) //logs in a user
app.get('/posts/:id', ctrl.getAllPosts) //gets all posts

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`))
})