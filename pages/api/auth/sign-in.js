import dbConnect from '../../../lib/mongo'
import nc from 'next-connect'

const User = require('../../../models/user')

const bcrypt = require('bcrypt')

const crypto = require('crypto')

const handler = nc().post(async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })

  try {
    if (!req.body) return

    await dbConnect()

    const { email, password } = await JSON.parse(req.body)

    if (!email || !password)
      return res.status(500).json({
        msg: 'somethng went wrong with you email or password!!'
      })
    console.log({ email })

    const user = await User.findOne({ email })

    if (!user) return

    const isCorrectPass = await bcrypt.compare(password, user.hashedPassword)

    if (!isCorrectPass) {
      res.status(401).json({ msg: 'Password is not correct' })
    } else {
      user.token = crypto.randomBytes(16).toString('hex')
      await user.save()
    }

    console.log({ user })

    if (user) return await res.status(200).json({ user: user.toObject() })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
})

export default handler