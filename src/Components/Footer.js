import React from 'react'
import { HiEnvelope } from "react-icons/hi2";
import { AiFillLinkedin } from "react-icons/ai"
import { IconContext } from "react-icons";
function Footer() {
  return (
    <div className='footer colorDark bgColorLight'>
      <IconContext.Provider value={{ size: "2em" }}>
      <p>  @2023 Silvia Cojocaru</p>
      {/* <a  href='https://juziey.com/'><p style={{fontSize: "12px"}}>Inspiration for the website JUZIEY</p></a> */}
      <div>
      <AiFillLinkedin/>
       <a href='mailto:cojocaruandreea379@gmail.com' >
      <HiEnvelope/>
      </a>
      </div>
      </IconContext.Provider>
    </div>
  )
}

export default Footer