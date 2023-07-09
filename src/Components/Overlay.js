import React from 'react'
import Geometrybg from './Geometrybg'
import {
  motion
} from "framer-motion"

function Overlay() {
  
  const titleVariants = {
    hidden:{
      y:50,
      opacity:0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{
        delay:0.5,
        duration:1,
        type:"spring",

      }
    }
  }
  const bgVariants={
    initial:{
      opacity: 0
    },
    animate:{
      opacity:1,
      transition:{
        duration:1.5
      }
    }
  }
  
  return (
    <div className="ovCont">
        
        <motion.div className='full'
          variants={bgVariants}
          initial="initial"
          animate="animate"
        >
        <Geometrybg/>
        </motion.div>
        <motion.h1 className='numeProiect Title'
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >PRODUCT DESIGNER</motion.h1>
         {/* <motion.h1 className='numeProiect Title'
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >GRAPHIC DESIGNER</motion.h1> */}
    </div>
  )
}

export default Overlay