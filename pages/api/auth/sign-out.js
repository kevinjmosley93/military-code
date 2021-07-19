import { removeTokenCookie } from '../../../lib/auth/auth-cookies'
import dbConnect from '../../../lib/mongo'

const User = require('../../../models/user')

const crypto = require('crypto')

export default async (req, res) => {
  if (req.method !== 'GET')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })
  try {
    await dbConnect()
    if (!req.body) return

    const { id } = JSON.parse(req.body)

    const user = await User.find({ _id: id })
    if (!user) return
    console.log(id)

    user.token = crypto.randomBytes(24)

    const savedUser = await user.save()
    if (!savedUser) return
    removeTokenCookie(res)

    res.status(204).json({ msg: 'user signed-out', success: true })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
}
