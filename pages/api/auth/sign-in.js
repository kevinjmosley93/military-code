import { setLoginSession } from '../../../lib/auth/auth'
import { findUser } from '../../../lib/auth/user'
import dbConnect from '../../../lib/mongo'

const jwt = require('jsonwebtoken')
const crypto = require('crypto')

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })

  try {
    await dbConnect()
    if (!req.body) return

    const { email, password } = await JSON.parse(req.body)

    if (!email || !password)
      return res.status(500).json({
        msg: 'somethng went wrong with you email or password!!'
      })
    console.log({ email })

    const { user } = await findUser(email, password)
    if (!user) return

    console.log({ user })

    const userObj = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: user.token
    }

    const token = jwt.sign(userObj, process.env.NEXT_PUBLIC_TOKEN_SECRET, {
      expiresIn: 60 * 5
    })

    if (!token) return

    console.log({ token })

    const { session } = await setLoginSession(res, token)

    await res.status(200).json({ user: user.toObject(), userToken: session })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
}
