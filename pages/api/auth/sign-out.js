import nc from 'next-connect'
import passport from 'passport'

const crypto = require('crypto')

const auth = require('../../../lib/auth/auth')

const replaceToken = require('../../../lib/auth/replace_token')

const requireToken = passport.authenticate('bearer', { session: false })

const handler = nc().delete(async (req, res) => {
  if (req.method !== 'DELETE')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })
  try {
    console.log(req)

    req.user.token = crypto.randomBytes(16)

    const savedUser = await req.user.save()
    if (!savedUser) return

    res.status(204).json({ msg: 'user signed-out' })
  } catch (err) {
    console.error(`THERE WAS AN ERRORR!!: ${err}`)
  }
})

export default handler
