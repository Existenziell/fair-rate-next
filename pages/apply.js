import ApplyForm from '../components/ApplyForm'
import Main from '../components/main'

const Apply = () => {

  return (
    <Main title='Apply' titleSuffix={true}>
      <div className='flex flex-col items-center justify-center my-16 px-8 min-h-full relative'>
        <ApplyForm />
      </div>
    </Main>
  )
}

export default Apply
