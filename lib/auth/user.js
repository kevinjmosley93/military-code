const bcrypt = require('bcrypt')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
import crypto from 'crypto'
const salt = crypto.randomBytes(64).toString('hex')

export async function createUser(firstName, lastName, email, password) {
  const hashedPass = await bcrypt.hash(password, 25)

  const userObj = {
    firstName,
    lastName,
    email,
    hashedPassword: hashedPass
  }

  const user = await User.create(userObj)
  await user.save()

  return { user }
}

export async function findUser(email, password) {
  const user = await User.findOne({ email })

  if (!user) return

  const isCorrectPass = await bcrypt.compare(password, user.hashedPassword)

  if (!isCorrectPass) return
  user.token = crypto.randomBytes(64).toString('hex')
  await user.save()

  console.log({ userInfo: user })

  return { user }
}
