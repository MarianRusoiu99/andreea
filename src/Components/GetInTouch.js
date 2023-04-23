import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";
import { IconContext } from "react-icons";
import FadeInSection from './FadeInSection';
import FadeInSection2 from './FadeInSection2';

function GetInTouch() {
  return (
    <IconContext.Provider value={{ size: "4em" }}>
    <div className='contBig'>
    <FadeInSection>
        <div className="bg contGet">
            <h2 className='header t'>GET IN TOUCH</h2>
            <p className='text maxw '>I am Zoey, a designer specializing in graphic and digital design. I believe design is a bridge for storytelling. I've always enjoyed experimenting with new technology to convey stories.</p>
              <FadeInSection2>
            <HiOutlineArrowRight className='text'/>
            </FadeInSection2>
        
 
    </div>
    </FadeInSection>
    </div>
    </IconContext.Provider>
  )
}

export default GetInTouch