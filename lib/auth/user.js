const bcrypt = require('bcrypt')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
import crypto from 'crypto'
const salt = crypto.randomBytes(64).toString('hex')

export async function createUser(firstName, lastName, email, password) {
  try {
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

    // console.log({ userIs: user })

    await user.save()

    return user
  } catch (err) {
    console.error(err)
  }
}

export async function ChangePassword(oldPassword, newPassword, userId) {
  try {
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
  } catch (err) {
    console.err(err)
  }
}

export async function findUser(email, password) {
  try {
    const user = await User.findOne({ email })

    const isCorrectPass = await bcrypt.compare(password, user.hashedPassword)

    if (!isCorrectPass) return
    user.token = crypto.randomBytes(64).toString('hex')
    await user.save()

    // console.log({ userInfo: user })

    return { user }
  } catch (err) {
    console.error(err)
  }
}
export async function findUserById(id) {
  try {
    const user = await User.findOne({ _id: id })

    // console.log({ userInfo: user })

    return { user }
  } catch (err) {
    console.error(err)
  }
}

export async function findUserByIdAndSaveTraining(id, training) {
  try {
    const user = await User.findOne({ _id: id })

    user.training.push(training)

    await user.save()

    // console.log({ userInfo: user, training })

    return { user }
  } catch (err) {
    console.error(err)
  }
}
