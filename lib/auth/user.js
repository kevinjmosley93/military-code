const bcrypt = require('bcrypt')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
import crypto from 'crypto'
import dbConnect from '../mongo'

const salt = crypto.randomBytes(64).toString('hex')

export async function createUser(firstName, lastName, email, password) {
  await dbConnect()
  const hashedPass = await bcrypt.hash(password, 25)

  const userObj = {
    firstName,
    lastName,
    email,
    hashedPassword: hashedPass
  }

  const user = await User.create(userObj)

  return { user }
}

export async function findUser(email, password) {
  await dbConnect()

  const user = await User.findOne({ email })

  if (!user) return

  const isCorrectPass = await bcrypt.compare(password, user.hashedPassword)

  if (!isCorrectPass) {
    res.status(401).json({ msg: 'Password is not correct' })
  } else {
    user.token = crypto.randomBytes(64).toString('hex')
    await user.save()
  }

  console.log({ userInfo: user })

  return user
}
