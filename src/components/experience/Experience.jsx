import React from 'react'
import './experience.css'
import {AiOutlineCheckSquare} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Newcomer</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
              <div>
              <h4>React native</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className='experience__content'>

          <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__content-icon'/>
              <div>
              <h4>mongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience