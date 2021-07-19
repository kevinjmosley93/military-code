import { getLoginSession } from '../../lib/auth/auth'
import { findUser } from '../../lib/auth/user'

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req)
    console.log({ sessionUser: session })
    const user = (session && (await findUser(session))) ?? null
    console.log({ User: user })
    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}
