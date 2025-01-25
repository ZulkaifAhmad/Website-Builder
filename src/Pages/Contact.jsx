import React from 'react'
import './About.css'

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contactHeading">
          <h2>Get In Touch</h2>
          <p>Interesting Ideas and Proposals? Write to us</p>
        </div>
        <form className='contactPageForm' name="contact" method="POST" data-netlify="true">
          <div className="contactFormRapp">
            <input className='contactInputs' required type="text" name="name" placeholder='Name'/>
            <input className='contactInputs' required type="email" name="email" placeholder='Email'/>
          </div>
          <div className="contactFormRapp">
            <input className='contactInputs' required type="number" name="phone" placeholder='Phone Number'/>
            <input className='contactInputs' required type="text" name="subject" placeholder='Subject'/>
          </div>
          <div className="textareaMap">
            <textarea required name="message" placeholder='Message'></textarea>
            <iframe src="https://www.google.com/maps/embed?pb=..." loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <button>Send Message <i className="ri-arrow-right-line"></i></button>
        </form>
      </div>
    </>
  )
}

export default Contact
