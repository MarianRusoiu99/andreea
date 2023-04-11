import React from 'react'
import { HiEnvelope } from "react-icons/hi2";
import { AiFillLinkedin } from "react-icons/ai"
import { IconContext } from "react-icons";
function Footer() {
  return (
    <div className='footer colorDark bgColorLight'>
      <IconContext.Provider value={{ size: "2em" }}>
      <p>  @2023 Andreea Cojocaru</p>
      <a href='https://juziey.com/'><p>Inspiration for the website JUZIEY</p></a>
      <div>
      <AiFillLinkedin/>
      <HiEnvelope/>
      </div>
      </IconContext.Provider>
    </div>
  )
}

export default Footer