import Link from 'next/link'
import Main from '../components/main'

export default function Success() {
  return (
    <>
      <Main title='Success!'>
        <div className='flex flex-col items-center justify-center mt-6 px-4 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h1 className="my-6">Thank you!</h1>
          <p className="">
            We appreciate your interest in FaiRate. We will do our best to respond as soon as possible.
          </p>
          <Link href='/reviews'>
            <a className="my-6">Want to see <span className='text-brand'>reviews</span> from other FairRate clients?</a>
          </Link>

        </div>
      </Main>
      <style jsx>{`
        svg {
          color: rgb(255, 0, 131);
          width: 200px;
        }
      `}</style>
    </>
  )
}