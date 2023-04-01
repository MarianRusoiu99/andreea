import React from 'react'
import placeholder from "../Assets/a.webp"
import {Link} from "react-router-dom"
function MyWork2() {
  return (

    <div className='cont'>
    <div className="hbar bgLight" ><h2 className='head'>MY WORK</h2></div>   
    <div id="wcont">

            <Link to="DesignInterior" className="workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t'>DESIGN INTERIOR</h3>
                <h4 className='subtitl t'>SFSDFSDFSD</h4>
             </Link>
             <Link to="DesignDeProdus" className="workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t'>DESIGN DE PRODUS</h3>
                <h4 className='subtitl t'>SFSDFSDFSD</h4>
             </Link>
             <Link to="DesignGrafic" className="workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t'>DESIGN GRAFIC</h3>
                <h4 className='subtitl t'>SFSDFSDFSD</h4>
             </Link>
             <Link to="Altele" className="workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t'>ALTELE</h3>
                <h4 className='subtitl t'>SFSDFSDFSD</h4>
             </Link>
             
           

    </div>
    </div>
  )
}

export default MyWork2