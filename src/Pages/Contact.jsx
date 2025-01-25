import React from 'react'
import './About.css'

function Contact() {
  function handleSubmitForm (){
    alert("Message Successfully Send !")
  }
  return (
    <>
      <div className="contact">
        <div className="contactHeading">
          <h2>Get In Touch</h2>
          <p>Interesting Ideas and Proposals? Write to us</p>
        </div>
        <form onSubmit={handleSubmitForm} className='contactPageForm'>
          <div className="contactFormRapp">
          <input className='contactInputs' required type="text" placeholder='Name'/>
          <input className='contactInputs' required type="email" placeholder='Email'/>
          </div>
          <div className="contactFormRapp">
          <input className='contactInputs' required type="number" placeholder='Phone Number'/>
          <input className='contactInputs' required type="text" placeholder='Subject'/>
          </div>
          <div className="textareaMap">
            <textarea required placeholder='Message'></textarea>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d805.4037383828613!2d71.59588615668738!3d33.95047130043174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sXH2W%2B4PV%2C%20Surizai%20bala%2C%20peshawar%2C%20khyber%20paktunkhwa%2C%20pakistan!5e0!3m2!1sen!2s!4v1736767690538!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <button type='submit'>Send Message <i class="ri-arrow-right-line"></i></button>
        </form>
      </div>

    </>
  )
}

export default Contact