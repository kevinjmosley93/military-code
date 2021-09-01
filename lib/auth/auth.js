const jwt = require('jsonwebtoken')
import dbConnect from '../mongo'
import { setTokenCookie, getTokenCookie } from './auth-cookies'
import { findUserById } from './user'

export async function setLoginSession(res, token) {
  setTokenCookie(res, token)
  return { session: true }
}

export async function getLoginSession(req) {
  try {
    await dbConnect()

    const token = await getTokenCookie(req)

    // console.log({ authUserToken: token })
    const jwtUser = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET)

    // console.log({ authUser: jwtUser })

    const { user } = await findUserById(jwtUser.id)

    // console.log({ authUser: user })
    const session = {
      user: user.toObject()
    }
    return session
  } catch (err) {
    console.error(err)
  }
}
