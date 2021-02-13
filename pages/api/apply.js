/**
**  Backend for apply form
**  Save to mongoDB collection 'applications'
**/

import { connectToDatabase } from "../../lib/mongodb"
import { getSession } from 'next-auth/client'
const { ObjectId } = require('mongodb')

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const session = await getSession({ req })

    let data = req.body
    if (!data) {
      res.status(404).send(false)
      return
    }
    data.createdAt = Date.now()
    if (session) data._userId = ObjectId(session.user.id)

    await db.collection('applications').insertOne({ data })
    res.status(200).send(true)
  } catch (error) {
    console.error("Error", error)
  }
}
