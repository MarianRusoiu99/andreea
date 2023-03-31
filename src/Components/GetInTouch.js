import React from 'react'
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { IconContext } from "react-icons";

function GetInTouch() {
  return (
    <IconContext.Provider value={{ size: "4em" }}>
    <div className='contBig'>
        <div className="bg contGet">
            <h2 className='header t'>GET IN TOUCH</h2>
            <p className='text maxw t'>I am Zoey, a designer specializing in graphic and digital design. I believe design is a bridge for storytelling. I've always enjoyed experimenting with new technology to convey stories.</p>
            <HiOutlineArrowUpRight className='text'/>
        </div>
        <div className='line'><div className='noline'></div></div>
    </div>
    </IconContext.Provider>
  )
}

export default GetInTouch