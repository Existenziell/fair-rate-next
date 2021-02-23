import { signIn, useSession } from 'next-auth/client'
import Link from 'next/link'
import Main from '../components/Main'

const Verified = () => {

  const [session] = useSession()

  return (
    <Main title='Your number has been verified'>
      <div className='flex flex-col items-center justify-center my-16 px-6 text-center w-full md:w-1/2 mx-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          className="text-brand w-1/3">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h1 className="my-6">Thank you,</h1>
        <h2 className="mb-6 text-brand text-xl">Your number has been verified</h2>

        {!session ?
          <a href="#" onClick={() => signIn('auth0')} className='button'>
            Sign in
          </a>
          :
          <div>
            <h3 className="mb-2">Next Steps:</h3>
            <p className="mb-8">
              Visit your{` `}<Link href="/account"><a>Account Page</a></Link>{` `}
              to add your bank account to FairRate.
            </p>
            <Link href="/account"><a className="button">Account Page</a></Link>
          </div>
        }
      </div>
    </Main >
  )
}

export default Verified
