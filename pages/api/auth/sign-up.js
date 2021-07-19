const bcrypt = require('bcrypt')
const User = require('../../../models/user')
const jwt = require('jsonwebtoken')

import dbConnect from '../../../lib/mongo'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })

  try {
    await dbConnect()
    if (!req.body) return

    const { firstName, lastName, email, password, passwordConfirm, jobSeeker } =
      await JSON.parse(req.body)

    if (!email || !password || password !== passwordConfirm)
      return res.status(500).json({
        msg: 'something went wrong with your email or password!!'
      })
    console.log({ email })

    const hashedPass = await bcrypt.hash(password, 25)

    if (!hashedPass)
      return res.status(500).json({
        msg: 'something went wrong with your email or password!!'
      })

    const userObj = {
      email,
      hashedPassword: hashedPass,
      jobSeeker,
      firstName,
      lastName
    }

    await User.create(userObj)

    await res.status(201).json({ success: true })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
}
