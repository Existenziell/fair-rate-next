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

    <button onClick={() => open()} disabled={!ready} className="flex items-center hover:text-brand">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
      Link your bank account
    </button>
  )
}

export default PlaidConnect
