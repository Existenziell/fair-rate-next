import ApplyForm from '../components/form/ApplyForm'
import Main from '../components/Main'

const Apply = () => (
  <Main title='Apply' titleSuffix={true}>
    <div className='flex flex-col items-center justify-center my-16 px-4 md:px-8 min-h-full relative'>
      <ApplyForm />
    </div>
  </Main>
)

export default Apply
