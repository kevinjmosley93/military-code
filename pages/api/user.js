import { getLoginSession } from '../../lib/auth/auth'

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req)

    if (!session) return
    const { user } = session

    if (!user) return

    // console.log({ sessionUser: user })

    await res.status(200).json({ user })
  } catch (error) {
    console.error(error)
  }
}
