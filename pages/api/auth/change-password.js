import { ChangePassword } from '../../../lib/auth/user'
import dbConnect from '../../../lib/mongo'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })

  try {
    await dbConnect()
    if (!req.body) return

    const { oldPassword, newPassword, userId } = await JSON.parse(req.body)

    if (!oldPassword) {
      return res.status(500).json({
        msg: 'somethng went wrong with your old password try again!!'
      })
    } else if (!newPassword) {
      return res.status(500).json({
        msg: 'somethng went wrong with your new password try again!!'
      })
    } else if (!userId) {
      return res.status(500).json({
        msg: 'somethng went wrong with your userid try again!!'
      })
    } else {
      // console.log({ oldPassword, newPassword, userId })

      const { success } = await ChangePassword(oldPassword, newPassword, userId)

      if (!success) return

      // console.log({ user })

      await res.status(200).json({ success })
    }
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
}
