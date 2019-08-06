require('dotenv').config();
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {register, login} = require('./auth/authController')

const app = express();

app.use(express.json());

app.use(session({
    resave:false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected');

})

app.post('/auth/register', register)
app.post('/auth/login', login)

app.listen(5050, () => console.log('listening on  port 5050!'))