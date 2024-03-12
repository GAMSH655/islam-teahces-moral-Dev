import '../Header.css'
import Img from '../assets/itmImg.jpg'

function Header() {
    
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
         <div className='headerContainer'>
         <img src={Img} alt="" className='logo' />
          <div className='navContainer'>
              <a href="#">home  <i class="fa-solid fa-house"></i></a>
              <a href="#">about <i class="fa-solid fa-user"></i></a>
              <a href="#">activities <i class="fa-solid fa-inbox"></i></a>
          </div>
           <div className="buttonContainer">
              <button id="sigNIN">sign in</button>
              <button id="signOut">sign in</button>
           </div>
           <button className="menuBTn">
           <i class="fa-solid fa-bars fa-2xl "></i>
           </button>
         </div>
        </>
    )
}
export default Header