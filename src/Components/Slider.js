import React from 'react'
import { Fade } from 'react-slideshow-image';
import '../CSS/styleSlider.css'
import { useLocation } from 'react-router-dom'
function Slider(props) {
    
  const location = useLocation()
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '50vw',
        top: '50%' ,
        left: '50%',
        width: "100%"
      }


  return (
    <div className="slide-container">
        <Fade>
         {props.images.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${location.pathname === "/MyWork/Pagina" ? "."+slideImage : slideImage}  )` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Fade>
      </div>
  )
}

export default Slider
