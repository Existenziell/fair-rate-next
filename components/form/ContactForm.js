import { Component } from "react"
import Router from 'next/router'
import Link from 'next/link'
import axios from "axios"
import Spinner from "../Spinner"

export default class ContactForm extends Component {

  state = {
    formButtonDisabled: false,
    formButtonText: "Send",
    name: "",
    email: "",
    message: ""
  }

  sendContactMail = async (name, email, message) => {

    this.setState({ formButtonDisabled: true })

    const data = {
      name,
      email,
      message
    }
    try {
      const res = await axios({
        method: "post",
        url: "/api/contact",
        headers: {
          "Content-Type": "application/json"
        },
        data
      })
      return res

    } catch (error) {
      this.setState({ formButtonDisabled: false })
      return error
    }
  }

  render() {
    const { formButtonText, formButtonDisabled, name, email, message } = this.state
    const btnClass = formButtonDisabled ? "disabled" : ""

    return (
      <div className="contact">

        <form className="contact-form" onSubmit={this.submitContactForm}>

          <h1>Contact us</h1>

          <label>Full Name:
          <input type="text"
              placeholder="John Smith"
              defaultValue={name}
              name="name"
              onChange={this.onNameChange}
              required />
          </label>

          <label>Email:
          <input type="email"
              placeholder="your@email.com"
              defaultValue={email}
              name="email"
              onChange={this.onMailChange}
              required />
          </label>

          <label>How can we help?
          <textarea
              name="message"
              placeholder="Please include all inquiries here"
              defaultValue={message}
              onChange={this.onMessageChange}
              required />
          </label>

          {formButtonDisabled ?
            <Spinner />
            :
            <input
              className={`button primary ${btnClass}`}
              type="submit"
              onClick={this.submitContactForm}
              disabled={formButtonDisabled}
              value={formButtonText} />
          }

          <div className="apply-teaser">
            <Link href="/apply"><a>Ready to apply for a treatment?</a></Link>&nbsp;&nbsp;
            <Link href="/apply"><a className="blue">Begin Here!</a></Link>
          </div>

        </form>

        <section className="contact-info">
          <div className="block">
            <img src="https://uploads-ssl.webflow.com/5d9667bad4a41e584795e13a/5d9667bad4a41e385d95e270_assembly.svg" width="25" alt="Contact" />
            <div>
              <p>
                <strong>Contact:</strong><br />
                Concierge: <a href="tel:18773827836" className="link-12">1 (877) CZM–STEM</a><br />
                Office: <a href="tel:1345943-2002" className="link-13">1 345 943-2002</a><br />
                Fax: 877-382-7836
              </p>
            </div>
          </div>
          <div className="block">
            <img src="https://uploads-ssl.webflow.com/5d9667bad4a41e584795e13a/5d9667bad4a41e526095e2fe_assembly%2010.svg" width="25" alt="Office Hours" />
            <div>
              <p>
                <strong>Office Hours:</strong><br />
                Monday - Friday <br />
                9am - 5pm CST<br />
              </p>
            </div>
          </div>
          <div className="block">
            <img src="https://uploads-ssl.webflow.com/5d9667bad4a41e584795e13a/5d9667bad4a41e42c495e26d_assembly%203.svg" width="25" alt="Location" />
            <div>
              <p>
                <strong>Location:</strong><br />
                25ᵃ Avenida Nte. 473, Centro<br />
                77600 San Miguel de Cozumel<br />
                Quintana Roo, Mexico
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onMailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  onMessageChange = (event) => {
    this.setState({ message: event.target.value })
  }

  submitContactForm = async (e) => {
    const form = document.forms[0]
    if (form.checkValidity()) {
      const { name, email, message } = this.state

      const res = await this.sendContactMail(name, email, message)
      if (res.status < 300) {
        Router.push('/success/')
      } else {
        this.setState({ formButtonText: "Sorry, something went wrong..." })
      }
    }
  }
}
