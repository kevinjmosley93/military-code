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

export async function findUser({ email }) {
  await dbConnect()
  const user = await User.findOne({ email })

  console.log({ userInfo: user })

  return user
}

export default async function validatePassword(user, password) {
  if (!user && !password) return

  const isCorrectPass = await bcrypt.compare(password, user.hashedPassword)

  if (!isCorrectPass) return

  const userObj = {
    _id: user._id,
    email: user.email,
    token: user.token
  }

  const token = jwt.sign(userObj, salt, { expiresIn: 60 * 5 })

  console.log({ token })
  user.token = salt
  await user.save()
  return token
}
