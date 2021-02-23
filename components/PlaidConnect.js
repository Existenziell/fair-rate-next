// Make a request to create and obtain a link token to be used in the Link component
import React, { useEffect, useState } from 'react'
import { usePlaidLink } from 'react-plaid-link'
import Router from 'next/router'

const PlaidConnect = () => {

  const [linkToken, setLinkToken] = useState(null)
  const generateToken = async () => {
    const response = await fetch('/api/plaid/create_link_token', {
      method: 'POST',
    })
    const data = await response.json()
    setLinkToken(data.link_token)
  }

  useEffect(() => {
    generateToken()
  }, [])

  return linkToken != null ?
    <Link linkToken={linkToken} />
    :
    <></>
}

// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link
const Link = (props) => {
  const onSuccess = React.useCallback(async (public_token, metadata) => {
    // send public_token to server
    const response = await fetch('/api/plaid/set_access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
    })

    const accessToken = await response.json()

    // Handle response ... save token... etc...
    // console.log("We have an access_token!", accessToken.access_token);
    Router.push('/approved')
  }, [])

  const config = {
    token: props.linkToken,
    onSuccess,
  }
  const { open, ready } = usePlaidLink(config)

  return (
    <button className="button secondary" onClick={() => open()} disabled={!ready}>
      Link bank account
    </button>
  )
}

export default PlaidConnect
