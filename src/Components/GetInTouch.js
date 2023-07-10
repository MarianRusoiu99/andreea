import React from 'react'
import { HiOutlineArrowRight,HiEnvelope } from "react-icons/hi2";
import {BsBehance , BsLinkedin } from "react-icons/bs";

import { IconContext } from "react-icons";
import FadeInSection from './FadeInSection';
import FadeInSection2 from './FadeInSection2';

function GetInTouch() {
  return (

    <div className='contBig'>
    <FadeInSection>
        <div className="bg contGet">
           
           
            <h2 className='header t'>GET IN TOUCH</h2>
            <p className='text maxw '>I am Cojocaru Silvia Andreea, a designer specialised in product and interior design. Combining creativity and functionality, I crafts designs that inspire and elevate spaces. With an eye for detail and a passion for innovation, their work leaves a lasting impression. "Design is the silent ambassador of your brand." - Paul Rand. I create captivating designs that speak volumes and bring ideas to life.</p>

            <IconContext.Provider value={{ size: "4em" }}>           
               <a href='mailto:cojocaruandreea379@gmail.com' >
              <FadeInSection2>
            <HiOutlineArrowRight className='text'/>
            </FadeInSection2>
            </a>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: "2em" }}> 
            <div>
            <a href='mailto:cojocaruandreea379@gmail.com' >
              <div style={{display:"flex", flexDirection:"row", alignItems:"center",}}>
            <HiEnvelope/>
            <p>: cojocaruandreea379@gmail.com</p>
            
            </div>
            </a>
{/* <div>
  <a style={{margin:"10px"}}>
<BsBehance/>
  </a>
  <a style={{margin:"10px"}}>
<BsLinkedin/>
  </a> */}
  {/* <a style={{margin:"10px"}}>
<BsBehance/>
  </a> */}
{/* </div> */}

            </div>
            </IconContext.Provider>
         </div>
        </FadeInSection>
  
    </div>
  
   
  )
}

export default GetInTouch