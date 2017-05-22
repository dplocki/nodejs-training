const express = require('express')
const passport = require('passport')
const onlyLoggedUsers = require('../utils').onlyLoggedUsers

const router = express.Router()

console.log(onlyLoggedUsers)

router.get('/', onlyLoggedUsers, function(req, res) {
  User.find(function(error, videos) {
    if (error) {
      res.send(error)
    }

    res.json(videos)
  })
})

module.exports = router
