const jwt = require('jsonwebtoken')
import dbConnect from '../mongo'
import { setTokenCookie, getTokenCookie } from './auth-cookies'
import { findUserById } from './user'

export async function setLoginSession(res, token) {
  setTokenCookie(res, token)
  return { session: true }
}

export async function getLoginSession(req) {
  await dbConnect()

  const token = getTokenCookie(req)

  // console.log({ authUserToken: token })
  if (!token) return

  const jwtUser = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET)

  if (!jwtUser) return
  // console.log({ authUser: jwtUser })

  const { user } = await findUserById(jwtUser.id)

  // console.log({ authUser: user })
  const session = {
    user: user.toObject()
  }
  return session
}
