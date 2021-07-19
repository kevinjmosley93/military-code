import { getLoginSession } from '../../lib/auth/auth'

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req)

    if (!session) return
    const { user } = session

    console.log({ sessionUser: user })

    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}
