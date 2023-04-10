import React from 'react'
import { useLocation } from 'react-router-dom'
import Slider from './Slider'
import FadeInSection from './FadeInSection'
function Pagina() {
  const location = useLocation()
  const { from } = location.state
  React.useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  console.log(from.Slider)
  return (
   
    <div className="Container">
      
      <div className="Title">
        <h1 className='numeProiect'>{from.title}</h1>
        <h2 className='subtitle'>{from.subtitle}</h2>
      </div>
      <FadeInSection>  
      <div className="bigImageContainer">
           <img src={`${from.bigPicture}`} alt='gi'/>
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
                  <img className='imagePage' alt='sc' src={`${from.Content[key].picture}`}></img>
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