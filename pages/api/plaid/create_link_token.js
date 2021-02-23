/**
**  Backend for Plaid Link Token Flow
**  https://plaid.com/docs/quickstart/#how-it-works
**
**  Create a new link_token by making a /link/token/create request.
**  This link_token is a short lived, one-time use token that authenticates 
**  your app with Plaid Link, the Plaid frontend module
**/

import plaid from 'plaid'
import { getSession } from 'next-auth/client'
import config from '../../../app.config'

export default async (req, res) => {

  const session = await getSession({ req })
  const client = new plaid.Client({
    clientID: config.plaid.clientID,
    secret: config.plaid.secretSandbox,
    env: plaid.environments.sandbox,
  })

  try {
    // Get the client_user_id from the current session
    const clientUserId = session.user.id
    // Create the link_token with all of your configurations
    const tokenResponse = await client.createLinkToken({
      user: {
        client_user_id: clientUserId,
      },
      client_name: 'FairRate',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en',
      webhook: 'https://webhook.sample.com',
    })
    return res.send({ link_token: tokenResponse.link_token })
  } catch (e) {
    return res.send({ error: e.message });
  }
}
