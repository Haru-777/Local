import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/rmpay.png'
import IMG2 from '../../assets/ivupage.png'
import IMG3 from '../../assets/mundomujer.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
<div className="container portfolio__container">
  <article className='portfolio__item'>
    <div className='portfolio__image'>
      <img src={IMG1} alt='' />
      <p className='portfolio__item-p'>I am actively participating in the development and production of a
mobile application for the purchase of products, registration and
customer management. The project is currently about to go into
production in Puerto Rico and I am supporting it. </p>
    </div>
    <h3>RM-Pay</h3>
  </article>
  <article className='portfolio__item'>
    <div className='portfolio__image'>
      <img src={IMG2} alt='' />
      <p className='portfolio__item-p'>
      I actively participated in the layout, development and production of a
web page for the purchase of products, registration and customer
management. The project is currently in production in Puerto Rico
and I continue to provide support
      </p>
    </div>
    <h3>Ivu Control</h3>
    <div className='portfolio__item-cta'>
    <a href='http://ivucontrolpr.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
  </article>
  <article className='portfolio__item'>
    <div className='portfolio__image'>
      <img src= {IMG3} alt =''/>
      <p className='portfolio__item-p'>I actively participated in the development and production of a project for the administration of bank loans with Banco Mundo Mujer. The project is currently in production at a national level and I continue to provide support. </p>
    </div>
    <h3>S.O.F.I</h3>
  </article>
</div>

    </section>
  )
}

export default Portfolio