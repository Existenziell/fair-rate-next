import { useSession, getSession, signIn } from 'next-auth/client'
import { useEffect } from 'react'
import { connectToDatabase } from "../lib/mongodb"
import Image from 'next/image'
import Main from '../components/main'
const { ObjectId } = require('mongodb')

const Account = (props) => {

  const [session] = useSession()
  const onboardings = JSON.parse(props.onboardings)
  const applications = JSON.parse(props.applications)
  const inquiries = JSON.parse(props.inquiries)

  useEffect(() => {
    if (!session) signIn() // Redirect to sign in page when not logged in
  }, [])

  const convertDate = (timestamp) => {
    return new Date(timestamp)
      .toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
  }

  return (
    <>
      {!session ?
        <div></div>
        :
        <Main title='My Account' titleSuffix={true}>
          <div className="flex flex-col items-center justify-center my-16 px-8">
            <h1 className="mb-2">Welcome {session?.user.name}</h1>
            <p className="mb-8">{session?.user.email}</p>

            {session?.user.image &&
              <div className="wrapper shadow-2xl mb-8">
                <Image
                  src={session?.user.image}
                  width={200}
                  height={200}
                  alt="Avatar"
                />
              </div>
            }

            <h2 className="text-xl">{inquiries && inquiries.length ? `Your open inquiries:` : ``}</h2>
            <div className="flex flex-wrap gap-4 ">
              {inquiries.map((inquiry, index) => (
                <div className="my-8 px-8 py-4 border border-gray-200 bg-gray-50 rounded" key={index}>
                  <span className="font-bold">{convertDate(inquiry.data.createdAt)}</span>

                  {Object.entries(inquiry.data).map(([key, value]) => (
                    <div className="my-2" key={key}>
                      <p>{key}</p>
                      {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <h2 className="text-xl">{applications && applications.length ? `Your current applications:` : ``}</h2>
            <div className="flex flex-wrap gap-4 ">
              {applications.map((application, index) => (
                <div className="my-8 px-8 py-4 border border-gray-200 bg-gray-50 rounded" key={index}>
                  <span className="font-bold">{convertDate(application.data.createdAt)}</span>

                  {Object.entries(application.data).map(([key, value]) => (
                    <div className="my-2" key={key}>
                      <p>{key}</p>
                      {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <h2 className="text-xl">{onboardings && onboardings.length ? `Your current onboardings:` : ``}</h2>
            <div className="flex flex-wrap gap-4 ">
              {onboardings.map((onboarding, index) => (
                <div className="my-8 px-8 py-4 border border-gray-200 bg-gray-50 rounded" key={index}>
                  <span className="font-bold">{convertDate(onboarding.data.createdAt)}</span>

                  {Object.entries(onboarding.data).map(([key, value]) => (
                    <div className="my-2" key={key}>
                      <p>{key}</p>
                      {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </Main>
      }
      <style jsx>{`
        .wrapper {
          height: 200px
        }
      `}</style>
    </>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(ctx) {

  const { db } = await connectToDatabase()
  const session = await getSession(ctx)

  // Redirect to sign in page when not logged in
  if (!session) {
    ctx.res.setHeader("location", "/api/auth/signin")
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  const user = await db
    .collection("users")
    .findOne(ObjectId(session.user.id))

  const inquiries = await db
    .collection("inquiries")
    .find({ "data._userId": ObjectId(session.user.id) })
    .toArray()

  const applications = await db
    .collection("applications")
    .find({ "data._userId": ObjectId(session.user.id) })
    .toArray()

  const onboardings = await db
    .collection("onboardings")
    .find({ "data._userId": ObjectId(session.user.id) })
    .toArray()

  return {
    props: {
      session: await getSession(ctx),
      user: JSON.stringify(user),
      inquiries: JSON.stringify(inquiries),
      applications: JSON.stringify(applications),
      onboardings: JSON.stringify(onboardings),
    }
  }
}

export default Account
