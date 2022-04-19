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
            <small>2+ years working</small>

          </article>

          <article className='about__card'>
            <RiUserStarLine className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </article>
      
          <article className='about__card'>
            <AiOutlineFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ completed projects</small>
          </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa distinctio labore omnis amet delectus officiis dignissimos corporis ipsum nam ut, nihil ipsa dolorum aliquid? Doloribus quos vitae fuga accusantium?
          </p>
      <a href='#contact' className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About