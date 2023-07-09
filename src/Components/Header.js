import React from 'react'
import {Link , useLocation} from "react-router-dom"
import {HiArrowUpRight} from "react-icons/hi2"
import { IconContext } from "react-icons";
import {motion} from "framer-motion"

function Header() {
  const pathList=["/Pagina","/Altele", "/DesignDeProdus","/MyWork/Altele","/MyWork/Pagina"];
  const location = useLocation();
  // console.log(location);
  const headerVariants={
    hidden:{ 
      y: -100,
    },
    visible:{
      y: 0,
      transition:{
        delay:0.5,
        duration:1
      }
    }
  }  


  return (
  
  

   <motion.div id="Header" className={` ${pathList.includes (location.pathname) ? "colorDark bgColorLight" : "colorLight bgColorDark" }`}
    variants={headerVariants}
    initial="hidden"
    animate="visible"
   
   >
   <Link  to="/"> <h2 className='headerName  index'>Andreea Cojocaru</h2></Link>
    <IconContext.Provider value={{ size: "2em"  }}>
    <Link className={`${pathList.includes(location.pathname) ? "colorDark bgColorLight" : "colorLight bgColorDark"}`  } style={{"margin-right" :"30px"}} to="/">
    <HiArrowUpRight/>
    </Link>
    <div className='outside'>
    <Link to="GetInTouch" className={`headerT ${pathList.includes(location.pathname) ? "colorDark" : "colorLight" }`}>CONTACT</Link>
    <Link to="MyWork" className={`headerT ${pathList.includes(location.pathname) ? "colorDark" : "colorLight" }`}>MY WORK</Link>
    </div>
    </IconContext.Provider>

</motion.div>

    


  )
}

export default Header