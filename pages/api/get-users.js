import dbConnect from '../../lib/mongo'
const User = require('../../models/user')

export default async (req, res) => {
  if (req.method !== 'GET')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })
  try {
    await dbConnect()

    const users = await User.find({})
    if (!users) return

    const userData = users.map(
      ({ _id, createdAt, email, jobCenters, jobs, training }) => {
        return { _id, createdAt, email, jobCenters, jobs, training }
      }
    )

    // console.log({ userData })

    res.status(200).json(userData)
  } catch (err) {
    console.error('ERROR!!!!', err)
  }
}
