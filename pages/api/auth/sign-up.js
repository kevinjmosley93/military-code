import nc from 'next-connect'
import dbConnect from '../../../lib/mongo'

const User = require('../../../models/user')

const bcrypt = require('bcrypt')

const saltRounds = 10

const handler = nc().post(async (req, res) => {
  try {
    if (!req.body) return

    await dbConnect()

    const { email, password, passwordConfirm } = await JSON.parse(req.body)

    if (!email || !password || password !== passwordConfirm)
      return res.status(500).json({
        msg: 'somethng went wrong with you email or password!!'
      })
    console.log({ email })

    const hashedPass = await bcrypt.hash(password, saltRounds)

    const userObj = {
      email,
      hashedPassword: hashedPass
    }

    const user = await User.create(userObj)

    console.log({ user })

    if (user) return await res.status(201).json({ user: user.toObject() })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
})

export default handler
