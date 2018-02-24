require('locus')
const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
let keys = require('../../../config/keys')
// const designersController = require('../../../controllers/designersController')

passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE_CLIENT_ID,
  clientSecret: keys.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/v1/auth/google/callback", 
  proxy: true
},
function (accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id, accessToken, refreshToken }, function (err, user) {
    done("hi", profile.id)
    return cb(err, user);
  })
  }
))

router.get('/', passport.authenticate('google', {
  scope: ['profile', 'email']
}
))

router.get('/callback', function(req, res) {
  eval(locus)    
  
  res.sendStatus(201)
}
)
module.exports = router;