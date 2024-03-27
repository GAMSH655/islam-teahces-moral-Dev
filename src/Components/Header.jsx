import '../Components/Header.css'
import Img from '../assets/itmImg.jpg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
       const [action , setAction] = useState(false);
       function handleClick(){
        console.log("open mobile nav");
        setAction((action)=>!action);
       }
      
    return(
        <>
         <div className='headerContainer'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
         <img src={Img} alt="" className='logo' />
          <div className='navContainer'>
            <NavLink to="/" id='navLink'> home  <i className="fa-solid fa-house"></i></NavLink>
            <NavLink to="/about" id='navLink'>about <i className="fa-solid fa-user"></i></NavLink>
            <NavLink to="/activities" id='navLink' >activities <i className="fa-solid fa-inbox"></i></NavLink>
          </div>
           <div className="iconContainer">
           <a href="https://www.facebook.com/people/Islam-teaches-moral/100076434553906/?mibextid=LQQJ4d"><i className="fa-brands fa-facebook fa-2xl"></i></a>
            <a href="https://www.instagram.com/islam_teaches_moral?igsh=ajI5cjJvOWlxZ3Uy&utm_source=qr"><i className="fa-brands fa-instagram fa-2xl"></i></a>
           <a href="  https://twitter.com/itmchannel/"> <i className="fa-brands fa-twitter fa-2xl"></i></a>
           </div>
           <button  className="menuBTn" onClick={handleClick}>
           <i className="fa-solid fa-bars fa-2xl "></i>
           </button>
         </div>
           {/* mobile header */}
           {action && <div className='mobileNav'>
           <div className="mobileIconContainer">
           <a href="https://www.facebook.com/people/Islam-teaches-moral/100076434553906/?mibextid=LQQJ4d"><i className="fa-brands fa-facebook fa-2xl"></i></a>
            <a href="https://www.instagram.com/islam_teaches_moral?igsh=ajI5cjJvOWlxZ3Uy&utm_source=qr"><i className="fa-brands fa-instagram fa-2xl"></i></a>
           <a href="  https://twitter.com/itmchannel/"> <i className="fa-brands fa-twitter fa-2xl"></i></a>
           </div> 
            
          <div className='LinkContainer'>
                <NavLink to="/" id='mobileLink'>
                home<i className="fa-solid fa-house"></i></NavLink>
                <NavLink to="/about" id='mobileLink'>about <i className="fa-solid fa-user"></i>
                </NavLink>
                <NavLink to="/activities" id='mobileLink'>
                    activities <i className="fa-solid fa-inbox"></i>
                </NavLink>
          </div>
         </div>/* mobile header */}
         
        </>
    )
}
export default Header