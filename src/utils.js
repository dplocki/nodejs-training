const passport = require('passport')

module.exports = {
  onlyLoggedUsers: passport.authenticate('jwt', { session: false })
}
