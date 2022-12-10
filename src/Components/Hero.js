import React from 'react'
import Portfolio from './SubComponents/Portfolio'
import Quote from './SubComponents/Quote'
import andreea from "./../Assets/and.png"
import AboutMe from './AboutMe'
function Hero() {
  return (
    <section id="Hero">
        <Portfolio/>
        <Quote/>
        <AboutMe/>

    </section>
  )
}

export default Hero