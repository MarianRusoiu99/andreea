import React from 'react'
import MyWork from './MyWork'
import Overlay from './Overlay'
import GetInTouch from './GetInTouch'
import MyWork2 from './MyWork2'
function Hero() {
  return (
    <section id="Hero">
        <Overlay/>
       <MyWork/>
       {/* <MyWork2/> */}
        <GetInTouch/>
    </section>
  )
}

export default Hero