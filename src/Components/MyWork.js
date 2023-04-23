import React from 'react'

import { Link, useLocation } from "react-router-dom"

import FadeInSection from './FadeInSection';


function MyWork() {
   const location = useLocation();
   console.log(location);
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

         <div className={` hbar colorDark bgColorLight  ${location.pathname === "/MyWork" ? "paddingtop" : ""}`} >
            <FadeInSection><h2 className='head'>MY WORK</h2></FadeInSection></div>

         <div id="wcont">

            {

               Object.keys(all).map(key => {
                  // console.log(key, all[key]);
                  return (
                     <Link to="Pagina" state={{ from: all[key] }} className="workitem">
                        <img className="imag" src={`${all[key].bigPicture}`} alt="text" />
                        <h3 className='titl text t'>DESIGN INTERIOR</h3>
                        <h4 className='subtitl t'>SFSDFSDFSD</h4>
                     </Link>)
                  // console.log(all[key].bigPicture)
               })
            }



         </div>
      </div>
   )
}

export default MyWork