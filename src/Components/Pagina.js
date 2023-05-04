import React from 'react'
import { useLocation } from 'react-router-dom'
import Slider from './Slider'
import Geometrybg from './Geometrybg'
import FadeInSection from './FadeInSection'
import { motion } from 'framer-motion'
function Pagina() {
  const location = useLocation()
  console.log(location.pathname)
  const { from } = location.state
  React.useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  console.log(from.Slider)
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
   
    <div className="Container bgColorLight colorDark">
      <motion.div className='full'
        variants={bgVariants}
        animate="animate"
        initial="initial"
      >
      <Geometrybg color="#1E1E1E"/>
      </motion.div>
      <motion.div className="Title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
      
        <h1 className='numeProiect'>{from.title}</h1>
        <h2 className='subtitle'>{from.subtitle}</h2>
      </motion.div>
      <FadeInSection>  
      <div className="bigImageContainer">
           <img src={`${location.pathname === "/MyWork/Pagina" ? "."+from.bigPicture : from.bigPicture}`} alt='gi'/>
      </div>
</FadeInSection>
      <div className='storyContent'>
        
        {
      Object.keys(from.Content).map(key => {
  //  console.log(key, from.Content[key]);
               return(
               <FadeInSection>              
                 <div className="itemContent">
                  <div className='text1'>
                  <h3 className='h'>{from.Content[key].name}</h3>
                  <p className='con'>{from.Content[key].text}</p>
                  </div>
                  <img className='imagePage' alt='sc' src={`${location.pathname === "/MyWork/Pagina" ? "."+from.Content[key].picture : from.Content[key].picture}  `}></img>
               </div>
               </FadeInSection>

                )
                  // console.log(all[key].bigPicture)
               })
            }

      </div>
      <FadeInSection>
            <Slider images = {from.Slider}/>
            </FadeInSection>
    </div>
  )
}

export default Pagina