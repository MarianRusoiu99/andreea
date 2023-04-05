import React from 'react'
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Slider(props) {
    
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '600px',

        width: "100%"
      }


  return (
    <div className="slide-container">
        <Fade>
         {props.images.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Fade>
      </div>
  )
}

export default Slider
