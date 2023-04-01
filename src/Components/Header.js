import React from 'react'
import {Link , useLocation} from "react-router-dom"
import {HiArrowUpRight} from "react-icons/hi2"
import { IconContext } from "react-icons";
function Header() {
  const pathList=["/Altele", "/DesignDeProdus","/MyWork/Altele"];
  const location = useLocation();
  console.log(location);
  return (
  
  

   <div id="Header" className={`${pathList.includes(location.pathname) ? "light" : "dark"}`}>
    <h2>Andreea Cojocaru</h2>
    <IconContext.Provider value={{ size: "2em"  }}>
    <Link className={`icon-link ${pathList.includes(location.pathname) ? "light" : "dark"}` } to="/">
    <HiArrowUpRight/>
    </Link>
    <div className='outside'>
    <Link to="GetInTouch" className="text-link" style={{color: `${pathList.includes(location.pathname) ? "#1E1E1E"  : "#ced8da" }`  }}>CONTACT</Link>
    <Link to="MyWork" className="text-link" style={{color: `${pathList.includes(location.pathname) ? "#1E1E1E" : "#ced8da" }`  }}>MY WORK</Link>
    </div>
    </IconContext.Provider>

</div>

    


  )
}

export default Header