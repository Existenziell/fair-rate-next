import Main from '../components/main'
import ContactForm from '../components/form/ContactForm'

const Contact = () => {

  return (
    <Main title='Contact' titleSuffix={true}>
      <div className="flex items-center justify-center my-16">
        <ContactForm />
      </div>

      <style jsx>{`
        
      `}</style>
    </Main>
  )
}

export default Contact
