import React from 'react'
import placeholder from "../Assets/a.webp"

function MyWork() {
  return (

    <div className='cont'>
    <div className="hbar bgLight t">ceva</div>   
    <div id="wcont">

            <div className = "workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t'>DESIGN INTERIOR</h3>
                <h4 className='subtitl t'>SFSDFSDFSD</h4>
                
             </div>
             <div className = "workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t '>DESIGN DE PRODUS</h3>
                <h4 className='subtitl t'>text</h4>
                
             </div>
             <div className = "workitem">
                <img className="imag t " src={placeholder}  alt="text"/>
                <h3 className='titl text t' >DESIGN GRAFIC</h3>
                <h4 className='subtitl t'>text</h4>
                
             </div>
             <div className = "workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t'>ALTELE</h3>
                <h4 className='subtitl t'>text</h4>
                
             </div>

    </div>
    </div>
  )
}

export default MyWork