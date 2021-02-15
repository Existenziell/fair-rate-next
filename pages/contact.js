import Main from '../components/Main'
import ContactForm from '../components/form/ContactForm'

const Contact = () => (
  <Main title='Contact' titleSuffix={true}>
    <div className="flex items-center justify-center my-16 px-6">
      <ContactForm />
    </div>
  </Main>
)

export default Contact
