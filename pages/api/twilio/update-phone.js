import { connectToDatabase } from "../../../lib/mongodb"
import { getSession } from 'next-auth/client'
import { ObjectId } from 'mongodb'

export default async (req, res) => {

  try {
    const { db } = await connectToDatabase()
    const session = await getSession({ req })
    const data = req.body

    if (!data) res.status(404).send(false)

    db.collection('users').updateOne({ "_id": ObjectId(session.user.id) }, { $set: { phone: data.phoneNumber } }, async function (error, response) {
      if (error) {
        res.status(404).send(false)
      } else {
        res.status(200).send(true)
      }
    })
  } catch (error) {
    res.status(404).send(false)
  }
}
