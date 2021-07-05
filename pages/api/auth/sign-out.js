import dbConnect from '../../../lib/mongo'
import nc from 'next-connect'

const User = require('../../../models/user')

const crypto = require('crypto')

const handler = nc().post(async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })
  try {
    if (!req.body) return

    await dbConnect()

    const { _id } = await JSON.parse(req.body)

    // const user = await User.find({ _id })

    console.log(_id)

    // user.token = crypto.randomBytes(24)

    // const savedUser = await user.save()
    // if (!savedUser) return

    res.status(204).json({ msg: 'user signed-out' })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
})

export default handler
