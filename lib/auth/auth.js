const jwt = require('jsonwebtoken')
import { setTokenCookie, getTokenCookie } from './auth-cookies'

export async function setLoginSession(res, token) {
  setTokenCookie(res, token)
  return { session: true }
}

export async function getLoginSession(req) {
  const token = getTokenCookie(req)

  // console.log({ authUserToken: token })
  if (!token) return

  const user = jwt.decode(token)
  // console.log({ authUser: user })
  const session = {
    user
  }
  return session
}
