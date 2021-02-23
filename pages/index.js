import { useSession } from 'next-auth/client'
import { motion } from "framer-motion"
import Link from 'next/link'
import Main from '../components/Main'
import Button from '../components/form/Button'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <>
      <Main title='FairRate Mortgage App' titleSuffix={false}>
        <div className="bg-floorplan bg-cover h-full flex flex-col items-center justify-center px-6 pt-12 pb-32">

          <h1 className="text-center sm:w-1/3 md:w-2/5">
            Get the right home loan at a great rate
          </h1>

          <h2 className="mt-8 mb-16 text-center sm:w-1/3 md:w-2/5 p-4 bg-opacity-60 bg-white">
            Compare, choose &amp; settle with America’s number 1 online home loan platform
          </h2>

          <Link href="/apply">
            <motion.a className="mb-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }} >
              <Button text="I want to refinance" modifier="primary promo" icon='dollar' size={320} />
            </motion.a>
          </Link>

          <Link href="/onboarding">
            <motion.a
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }} >
              <Button text="I want to buy a home" modifier="primary promo" icon='house' size={320} />
            </motion.a>
          </Link>
        </div>
      </Main>
    </>
  )
}
