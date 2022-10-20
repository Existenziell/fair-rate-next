import { connectToDatabase } from "../../../lib/mongodb"
import { getSession } from 'next-auth/client'
import { ObjectId } from 'mongodb'

export default async (req, res) => {

  try {
    const { db } = await connectToDatabase()
    const session = await getSession({ req })

    let token = req.body
    if (!token) {
      res.status(404).send(false)
      return
    }

    db.collection('users').updateOne({ "_id": ObjectId(session.user.id) }, { $set: { ...token } }, async function (error, response) {
      if (error) {
        res.status(404).send(error)
      } else {
        res.status(200).send(response)
      }
    })
  } catch (error) {
    res.status(404).send(false)
  }
}
