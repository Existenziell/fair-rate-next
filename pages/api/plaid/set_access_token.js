/**
**  Backend for Plaid Link Token Flow
**  https://plaid.com/docs/quickstart/#how-it-works
**
**  Call /item/public_token/exchange to obtain an access_token. 
**  The access_token uniquely identifies an Item and is a required argument for most Plaid API endpoints. 
**  ToDo: Securely store the access_token in order to make API requests for that Item.
**/

import plaid from 'plaid'
import config from '../../../app.config'

export default async (req, res) => {

  // Initialize the Plaid client
  const client = new plaid.Client({
    clientID: config.plaid.clientID,
    secret: config.plaid.secretSandbox,
    env: plaid.environments.sandbox,
  })

  // We store the access_token in memory - 
  // In production, store it in a secure persistent data store
  let PUBLIC_TOKEN = req.body.public_token
  let ACCESS_TOKEN = null
  let ITEM_ID = null

  try {
    client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
      if (error != null) {
        return res.json({
          error,
        })
      }
      ACCESS_TOKEN = tokenResponse.access_token
      ITEM_ID = tokenResponse.item_id

      return res.send({
        access_token: ACCESS_TOKEN,
        item_id: ITEM_ID,
        error: null,
      })
    })
  } catch (e) {
    return res.send({ error: e.message });
  }
}
