const bcrypt = require('bcryptjs')
const localstrategy = require('passport-local').Strategy
const usuarioscontroller = require('./app/controlers/usercontroller')

bcrypt.hashSync('nomedomeuis')

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

  passport.use(
    new localstrategy(
      {
        usernameField: 'user',
        passwordField: 'password'
      },

      async function (username, password, done) {
        try {
          const user = await usuarioscontroller.findbyname(username)
          const isvalid = bcrypt.compareSync(password, user[0].password)
          if (!user || !isvalid) {
            return done(null, false)
          } else {
            return done(null, user)
          }
        } catch (err) {
          return done(err, false)
        }
      }
    )
  )
}
