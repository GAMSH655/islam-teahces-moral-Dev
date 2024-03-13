import '../Header.css'
import Img from '../assets/itmImg.jpg'
import { useState } from 'react'

function Header() {
       const [action , setAction] = useState(false);
       function handleClick(){
        console.log("open mobile nav");
        setAction((action)=>!action);
       }
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
         <div className='headerContainer'>
         <img src={Img} alt="" className='logo' />
          <div className='navContainer'>
              <a href="#" id='navLink'>home  <i class="fa-solid fa-house"></i></a>
              <a href="#" id='navLink'>about <i class="fa-solid fa-user"></i></a>
              <a href="#" id='navLink'>activities <i class="fa-solid fa-inbox"></i></a>
          </div>
           <div className="iconContainer">
           <i class="fa-brands fa-facebook fa-2xl"></i>
           <i class="fa-brands fa-instagram fa-2xl"></i>
           <i class="fa-brands fa-twitter fa-2xl"></i>
           </div>
           <button  className="menuBTn" onClick={handleClick}>
           <i class="fa-solid fa-bars fa-2xl "></i>
           </button>
         </div>
        
           {/* mobile header */}
           {action && <div className='mobileNav'>
           <div className="mobileIconContainer">
           <i class="fa-brands fa-facebook fa-2xl"></i>
           <i class="fa-brands fa-instagram fa-2xl"></i>
           <i class="fa-brands fa-twitter fa-2xl"></i>
           </div> 
        
          <div className='LinkContainer'>
              <a href="#" id='mobileLink'>home  <i class="fa-solid fa-house"></i></a>
              <a href="#" id='mobileLink'>about <i class="fa-solid fa-user"></i></a>
              <a href="#" id='mobileLink'>activities <i class="fa-solid fa-inbox"></i></a>
          </div>
         

         </div>/* mobile header */}
         
        </>
    )
}
export default Header