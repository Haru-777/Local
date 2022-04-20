import React from 'react'
import './about.css'
import ME from '../../assets/portafolio.jpg'
import {BsAward} from 'react-icons/bs'
import {RiUserStarLine} from 'react-icons/ri'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='about image' />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <BsAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ years working</small>

          </article>

          <article className='about__card'>
            <RiUserStarLine className='about__icon'/>
            <h5>Clients</h5>
            <small>20+ worldwide</small>
          </article>
      
          <article className='about__card'>
            <AiOutlineFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ completed projects</small>
          </article>
          </div>
          <p>
          I am a student of Electronic Engineering and Telecommunications. 
          I am passionate about web development, mobile development, and systems software architecture.
          To acquire these skills I have been self-taught for the last four years, as I love researching,
          analyzing, and understanding architecture related to software development.
          Currently, I belong to the IEEE student branch, WIE student branch, and I was part of the ISA 
          student branch for two years. I participated and organized the technological event TET-2019.
          In a large part of university projects, I have handled the role of Scrum Master for which I handle 
          the Scrum methodology, consequently teamwork.
          </p>
      <a href='#contact' className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About