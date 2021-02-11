/**
**  Backend for apply form
**  Save to mongoDB 
**/

import { connectToDatabase } from "../../lib/mongodb"

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let data = req.body

    if (!data) {
      res.status(404).send(false)
      return
    }
    data.createdAt = Date.now()
    await db.collection('applications').insertOne({ data })
    res.status(200).send(true)
  } catch (error) {
    console.error("Error", error);
  }
}
