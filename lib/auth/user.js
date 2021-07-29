const bcrypt = require('bcrypt')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
import crypto from 'crypto'
const salt = crypto.randomBytes(64).toString('hex')

export async function createUser(firstName, lastName, email, password) {
  const hashedPass = async () => {
    const pass = await bcrypt.hash(password, 10)
    // console.log({ pass })
    return pass
  }

  const pass = await hashedPass()

  // console.log({ passssssssss: pass })

  const userObj = {
    firstName,
    lastName,
    email,
    hashedPassword: pass
  }
  // console.log({ userObj })
  const user = await User.create(userObj)

  if (!user) return
  // console.log({ userIs: user })

  await user.save()

  return user
}

export async function ChangePassword(oldPassword, newPassword, userId) {
  const user = await User.findOne({ _id: userId })

  if (!user || !oldPassword) return

  const isCorrectPass = await bcrypt.compare(oldPassword, user.hashedPassword)

  if (!newPassword || !isCorrectPass) return

  const hashedPass = async () => {
    const pass = await bcrypt.hash(newPassword, 10)
    // console.log({ pass })
    return pass
  }

  const pass = await hashedPass()

  user.hashedPassword = pass
  user.save()

  return { success: true }
}

export async function findUser(email, password) {
  const user = await User.findOne({ email })

  if (!user) return

  const isCorrectPass = await bcrypt.compare(password, user.hashedPassword)

  if (!isCorrectPass) return
  user.token = crypto.randomBytes(64).toString('hex')
  await user.save()

  // console.log({ userInfo: user })

  return { user }
}
export async function findUserById(id) {
  const user = await User.findOne({ _id: id })

  if (!user) return

  // console.log({ userInfo: user })

  return { user }
}

export async function findUserByIdAndSaveTraining(id, training) {
  const user = await User.findOne({ _id: id })

  if (!user) return

  user.training.push(training)

  await user.save()

  // console.log({ userInfo: user, training })

  return { user }
}
