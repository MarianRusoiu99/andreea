import React from 'react'
import {Link} from "react-router-dom"
import {HiArrowUpRight} from "react-icons/hi2"
import { IconContext } from "react-icons";
function Header() {
  return (
    <div id="Header">
        <h2>Andreea Cojocaru</h2>
        <IconContext.Provider value={{ size: "2em"  }}>
        <Link className="icon-link" to="/">
        <HiArrowUpRight/>
        </Link>
        <div className='outside'>
        <Link to="GetInTouch" className="text-link">CONTACT</Link>
        <Link to="MyWork" className="text-link">MY WORK</Link>
        </div>
        </IconContext.Provider>
        {/* <Link className="Link-nav" to="/">Home</Link>
        <Link className="Link-nav" to="Skills">Skills</Link>
        <Link className="Link-nav" to="AboutMe">About Me</Link>
        <Link className="Link-nav" to="Gallery">Gallery</Link> */}
    </div>


  )
}

export default Header