/**
**  Backend for contact form
**  Save to mongoDB collection 'inquiries'
**/

import { connectToDatabase } from "../../lib/mongodb"
import { getSession } from 'next-auth/client'
const { ObjectId } = require('mongodb')

export default async (req, res) => {

  const { db } = await connectToDatabase()
  const session = await getSession({ req })

  let data = req.body
  if (!data) {
    res.status(404).send(false)
    return
  }
  data.createdAt = Date.now()
  if (session) data._userId = ObjectId(session.user.id)

  db.collection('inquiries').insertOne({ ...data }, async function (error, response) {
    if (error) {
      res.status(404).send(false)
    } else {
      res.status(200).send(true)
    }
  })
}
