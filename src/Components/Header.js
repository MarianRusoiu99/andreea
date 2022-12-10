import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div id="Header">
        <Link className="Link-nav" to="/">Home</Link>
        <Link className="Link-nav" to="Skills">Skills</Link>
        <Link className="Link-nav" to="AboutMe">About Me</Link>
        <Link className="Link-nav" to="Gallery">Gallery</Link>
    </div>


  )
}

export default Header