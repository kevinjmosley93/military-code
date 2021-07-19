import Local from 'passport-local'
import { findUser, validatePassword } from './user'

export const localStrategy = new Local.Strategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    findUser({ email })
      .then(user => {
        if (user && validatePassword(user, password)) {
          console.log({ loadedUser: user })
          done(null, user)
        } else {
          done(new Error('Invalid username and password combination'))
        }
      })
      .catch(error => {
        done(error)
      })
  }
)
