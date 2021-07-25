import { findUserByIdAndSaveTraining } from '../../lib/auth/user'
import dbConnect from '../../lib/mongo'
import { v4 as uuidv4 } from 'uuid'
const User = require('../../models/user')

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })
  try {
    await dbConnect()
    if (!req.body) return
    const {
      userId,
      SchoolName,
      ProgramName,
      Address,
      City,
      StateAbbr,
      Zip,
      Phone
    } = await req.body

    const training = {
      id: uuidv4(),
      SchoolName,
      ProgramName,
      Address,
      City,
      StateAbbr,
      Zip,
      Phone
    }
    const { user } = await findUserByIdAndSaveTraining(userId, training)
    if (!user) return

    // console.log({ user })

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('ERROR!!!!', err)
  }
}
