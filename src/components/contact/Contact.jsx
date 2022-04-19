import './contact.css'
import React, { useRef } from 'react'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'


const Contact = () => {
  const form = useRef ();
  
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_5u1dmxl', 'template_4tb5jci', form.current, 'OyMmJjaKp3bWEkK_6')
    e.target.reset()
    .then((result) => {
      console.log(result.text);
    },(error) =>{
      console.log(error.text);
    });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMailOpen className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>linahoyos14@gmail.com</h5>
          <a href="mailto:linahoyos14@gmail.com" target="_blank">Sent a message</a>
        </article>
      
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+57 3167366593</h5>
          <a href="https://api.whatsapp.com/send?phone=+573167366593" target="_blank">Sent a message</a>
        </article>
      </div>
     
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Sent Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact