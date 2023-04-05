import React from 'react'
import placeholder from "../Assets/a.webp"
import {Link} from "react-router-dom"
import Pagina from './Pagina'
function MyWork() {

   const context = require.context('./Json', true, /.json$/);
const all = {};
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`./Json/${fileName}`);
  const namespace = fileName.replace('.json', '');
  all[namespace] = JSON.parse(JSON.stringify(resource));
 
});
// Object.keys(all).forEach(key => {
//    // console.log(key, all[key]);
//  });


  return (

    <div className='cont'>
    <div className="hbar bgLight" ><h2 className='head'>MY WORK</h2></div>   
    <div id="wcont">

            {

               Object.keys(all).map(key => {
   // console.log(key, all[key]);
               return(
               <Link to="Pagina" state={{ from: all[key] }}  className="workitem">
                  <img className="imag" src={`${all[key].bigPicture}`}  alt="text"/>
                  <h3 className='titl text t'>DESIGN INTERIOR</h3>
                  <h4 className='subtitl t'>SFSDFSDFSD</h4>
                 </Link>)
                  // console.log(all[key].bigPicture)
               })
            }

            {/* <Link to="DesignInterior" className="workitem">
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
             <Link to="Pagina" state={{ from: "./Json/Altele.json" }} className="workitem">
                <img className="imag" src={placeholder}  alt="text"/>
                <h3 className='titl text t'>ALTELE</h3>
                <h4 className='subtitl t'>SFSDFSDFSD</h4>
             </Link> */}
             
             
    </div>
    </div>
  )
}

export default MyWork