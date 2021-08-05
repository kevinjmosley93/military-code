import { createComment } from '../../lib/auth/comment'
import dbConnect from '../../lib/mongo'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'METHOD NOT ALLOWED' })

  try {
    await dbConnect()
    if (!req.body) return

    const { commentBody, user } = await req.body
    if (!commentBody || !user)
      return res.status(500).json({
        msg: 'somethng went wrong with your comment!!'
      })
    console.log({ commentBody, user })

    const comment = await createComment(commentBody)

    if (!comment) return

    console.log({ comment })
  } catch (err) {
    console.error('SOMETHING HAPPEND WITH COMMENT', err)
  }
}
