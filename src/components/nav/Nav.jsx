import './nav.css'
import React from 'react'
import {GoHome} from 'react-icons/go'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkspacesOutline} from 'react-icons/md'
import {MdOutlineDesignServices} from 'react-icons/md'
import {IoIosContact} from 'react-icons/io'
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><GoHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' } ><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' } ><MdWorkspacesOutline/></a>
      
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' } ><IoIosContact/></a>
    </nav>
  )
}

export default Nav