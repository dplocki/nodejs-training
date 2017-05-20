var config = require('./config'); // get our config file
var express = require('express')
var mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

mongoose.connect(config.database)

var app = express()

var router = express.Router()
router.route('/api')

router.get('/', function(req, res) {
  res.send('Yep, that is API')
})

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + PORT + '/api')
})

app.use('/api', router)

app.listen(PORT, function() {
  console.log('Magic happens at http://localhost:' + PORT)
})
