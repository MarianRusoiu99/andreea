import React from 'react'
import {Link , useLocation} from "react-router-dom"
import {HiArrowUpRight} from "react-icons/hi2"
import { IconContext } from "react-icons";
function Header() {
  const pathList=["/Pagina","/Altele", "/DesignDeProdus","/MyWork/Altele"];
  const location = useLocation();
  // console.log(location);
  return (
  
  

   <div id="Header" className={`${pathList.includes(location.pathname) ? "colorDark bgColorLight" : "colorLight bgColorDark" }`}>
   <Link  to="/"> <h2 className='headerName'>Andreea Cojocaru</h2></Link>
    <IconContext.Provider value={{ size: "2em"  }}>
    <Link className={`${pathList.includes(location.pathname) ? "colorDark bgColorLight" : "colorLight bgColorDark"}`  } style={{"margin-right" :"30px"}} to="/">
    <HiArrowUpRight/>
    </Link>
    <div className='outside'>
    <Link to="GetInTouch" className={`headerT ${pathList.includes(location.pathname) ? "colorDark" : "colorLight" }`}>CONTACT</Link>
    <Link to="MyWork" className={`headerT ${pathList.includes(location.pathname) ? "colorDark" : "colorLight" }`}>MY WORK</Link>
    </div>
    </IconContext.Provider>

</div>

    


  )
}

export default Header