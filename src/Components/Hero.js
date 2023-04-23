import React from 'react'
import MyWork from './MyWork'
import Overlay from './Overlay'
import GetInTouch from './GetInTouch'

function Hero() {
  return (
    <section id="Hero" className='colorLight bgColorDark'>
        <Overlay/>
       <MyWork/>
       {/* <MyWork2/> */}
        <GetInTouch/>
    </section>
  )
}

export default Hero