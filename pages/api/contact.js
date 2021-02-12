/**
**  Backend for contact form
**  Save to mongoDB collection 'inquiries'
**/

import { connectToDatabase } from "../../lib/mongodb"

export default async (req, res) => {

  const { db } = await connectToDatabase()
  let data = req.body

  if (!data) {
    res.status(404).send(false)
    return
  }
  data.createdAt = Date.now()

  db.collection('inquiries').insertOne({ data }, async function (error, response) {
    if (error) {
      res.status(404).send(false)
    } else {
      res.status(200).send(true)
    }
  })
}
