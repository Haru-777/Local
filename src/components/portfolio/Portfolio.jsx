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
    </div>
    <h3>RM-Pay</h3>
  </article>
  <article className='portfolio__item'>
    <div className='portfolio__image'>
      <img src={IMG2} alt='' />
    </div>
    <h3>Ivu Control</h3>
    <div className='portfolio__item-cta'>
    <a href='http://ivucontrolpr.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
  </article>
  <article className='portfolio__item'>
    <div className='portfolio__image'>
      <img src= {IMG3} alt =''/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam, sit nam sapiente ea mollitia suscipit voluptatum exercitationem eveniet nobis, adipisci consequuntur eum tempora quos? Id minus architecto dolorum vitae.</p>
    </div>
    <h3>S.O.F.I</h3>
  </article>
</div>

    </section>
  )
}

export default Portfolio