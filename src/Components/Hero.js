import React from 'react'
import andreea from "./../Assets/and.png"
import MyWork from './MyWork'
import Overlay from './Overlay'
import GetInTouch from './GetInTouch'
function Hero() {
  return (
    <section id="Hero">
        <Overlay/>
       <MyWork/>
        <GetInTouch/>
    </section>
  )
}

export default Hero