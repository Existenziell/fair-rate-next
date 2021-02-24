import { useEffect, useState } from 'react'
import Link from 'next/link'
import Main from '../../components/Main'

const Apply = () => {
  const [onboardingData, setOnboardingData] = useState()
  useEffect(() => {
    const onboardingRaw = JSON.parse(localStorage.getItem('fairRateOnboarding'))
    // If we know the firstname, greet user
    // ToDo: Trigger 'resume form' (where user left off last time)
    if (onboardingRaw) {
      setOnboardingData(onboardingRaw)
    }
  }, [])

  return (
    <Main title='Onboard' titleSuffix={true}>
      <div className='flex flex-col items-center justify-center my-16 px-8 md:px-16 relative'>
        {onboardingData?.firstName ?
          <h1 className="text-center mb-8">Welcome back, {onboardingData.firstName}</h1>
          :
          <h1 className="text-center mb-8 ">Onboarding</h1>
        }
        <div className="text-justify px-8 w-full lg:w-1/2">
          <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed urna at tellus posuere blandit. Quisque iaculis justo sed facilisis rhoncus. Pellentesque ac aliquam libero. Proin congue aliquam hendrerit. Fusce nulla nunc, congue vitae mauris ac, sagittis sodales eros.</p>
          <p className="mb-8">Aenean tempus velit ac justo ultrices, vitae faucibus nisl tempor. Suspendisse in sem orci. Curabitur vehicula volutpat velit, ut tincidunt ante luctus ac. Cras nunc erat, porttitor id mi vitae, hendrerit lobortis mi. Nullam tempus ullamcorper arcu, eget elementum mauris pellentesque quis. Suspendisse sagittis augue sed nisi mollis, at feugiat ante porta. Cras sit amet convallis orci. Vivamus maximus sapien eget dui varius, viverra lobortis odio molestie.</p>
        </div>
        <Link href="/onboarding/1"><a className="button primary mt-8">Start</a></Link>
      </div>
    </Main>
  )
}

export default Apply
