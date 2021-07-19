import { createUser } from '../../../lib/auth/user'

import dbConnect from '../../../lib/mongo'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })

  try {
    await dbConnect()
    if (!req.body) return

    const { firstName, lastName, email, password, passwordConfirm } =
      JSON.parse(req.body)

    if (!email || !password || password !== passwordConfirm)
      return res.status(500).json({
        msg: 'somethng went wrong with your email or password!!'
      })
    console.log({ email })

    const { user } = await createUser(firstName, lastName, email, password)

    if (!user)
      return res.status(500).json({
        msg: 'somethng went wrong with creating user!!TRY AGAIN!!',
        success: false
      })
    console.log({ regUser: user })

    res.status(201).json({ success: true })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
}
