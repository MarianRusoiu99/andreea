import React from 'react'
import { useLocation } from 'react-router-dom'

function Pagina() {
  const location = useLocation()
  const { from } = location.state

  console.log(from)
  return (
   
    <div className="Container">
      <div className="Title">
        <h1 className='numeProiect'>{from.title}</h1>
        <h2 className='subtitle'>{from.subtitle}</h2>
      </div>
      <div className="bigImageContainer">
           <img src={`${from.bigPicture}`} alt='gi'/>
      </div>

      <div className='storyContent'>
        
        {
      Object.keys(from.Content).map(key => {
   console.log(key, from.Content[key]);
               return(
               <div className="itemContent">
                  <h3>{from.Content[key].name}</h3>
                  <p>{from.Content[key].text}</p>
                  <img src={`${from.Content[key].picture}`}></img>
               </div>
               
                )
                  // console.log(all[key].bigPicture)
               })
            }

      </div>
    </div>
  )
}

export default Pagina