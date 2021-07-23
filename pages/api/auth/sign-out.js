import { removeTokenCookie } from '../../../lib/auth/auth-cookies'
import dbConnect from '../../../lib/mongo'

const User = require('../../../models/user')

const crypto = require('crypto')

export default async (req, res) => {
  if (req.method !== 'DELETE')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })
  try {
    await dbConnect()
    if (!req.body) return

    const { id } = req.body

    const user = await User.findOne({ _id: id })
    if (!user) return
    // console.log({ id })

    user.token = crypto.randomBytes(64).toString('hex')

    const savedUser = user
    if (!savedUser) return
    removeTokenCookie(res)
    // console.log({ savedUser })

    await res.status(200).json({ msg: 'user signed out', success: true })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
}
