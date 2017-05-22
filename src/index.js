const config = require('./config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jsonwebtoken = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')
const _ = require('lodash')
const fs = require('fs')

var User = require('./models/user')

passport.use(new passportJWT.Strategy({
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
    secretOrKey: config.secret
  }, function(jwtPayload, next) {
    var user = true
    if (user) {
      next(null, user)
    } else {
      next(null, false)
    }
  })
)

const PORT = process.env.PORT || 3000

mongoose.connect(config.database)
var app = express()

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + PORT + '/api')
})

app.get('/api', function(req, res) {
  res.send('Yep, that is API')
})

app.post('/login', function(req, res) {
  if (req.body.name && req.body.password) {
    var name = req.body.name
    var password = req.body.password
  }

  var user = true
  if (!user) {
    res.status(401).json({ message: "no such user found" });
  }

  var payload = { id: 2 };
  var token = jsonwebtoken.sign(payload, config.secret);
  res.json({ message: "ok", token: token });
})

app.use('/api/users', require('./routes/users'))
app.use('/api/videos', require('./routes/videos'))

app.listen(PORT, function() {
  console.log('Open http://localhost:' + PORT)
})
