const bcrypt = require('bcrypt')
const User = require('../../../models/user')
const jwt = require('jsonwebtoken')

import { createUser } from '../../../lib/auth/user'
import dbConnect from '../../../lib/mongo'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })

  try {
    await dbConnect()
    if (!req.body) return

    const { firstName, lastName, email, password, passwordConfirm, jobSeeker } =
      await req.body

    if (!email || !password || password !== passwordConfirm)
      return res.status(500).json({
        msg: 'something went wrong with your email or password!!'
      })
    console.log({ emailssssssssss: req.body })

    const user = await createUser(
      firstName,
      lastName,
      email,
      password,
      passwordConfirm
    )

    if (!user)
      return res.status(500).json({
        msg: 'something went wrong with your user '
      })
    console.log({ userrrrrrr: user })

    res.status(201).json({ success: true })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
}
