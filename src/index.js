var config = require('./config'); // get our config file
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var jsonwebtoken = require('jsonwebtoken');
var passport = require('passport');
var passportJWT = require('passport-jwt');

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
}))

const PORT = process.env.PORT || 3000

mongoose.connect(config.database)
var app = express()
var router = express.Router()

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router)

router.route('/api')
router.get('/', function(req, res) {
  res.send('Yep, that is API')
})

router.post('/login', function(req, res) {
  if (req.body.name && req.body.password) {
    var name = req.body.name;
    var password = req.body.password;
  }

  var user = true
  if (!user) {
    res.status(401).json({ message: "no such user found" });
  }

  var payload = { id: 2 };
  var token = jsonwebtoken.sign(payload, config.secret);
  res.json({ message: "ok", token: token });
})

router.get('/users', passport.authenticate('jwt', { session: false }),
  function(req, res) {
    res.json({ message: "Success! You can not see this without a token" });
  }
)

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + PORT + '/api')
})

app.listen(PORT, function() {
  console.log('Open http://localhost:' + PORT)
})
