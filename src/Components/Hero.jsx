import Katib from "../assets/katib.png"
import './Hero.css'
// import Katib from '/src/assets/katibImg.png'
  
 function Home(){
     return(
        <>
         <div className='Home'>
                <div className="imgCont">
                <img src={Katib} alt="" id='katibImg' />
                </div> 
             <div className="textbox">
                 <p className="text1">ISLAM TEACHES MORAL</p>
                 <p className="introTExt">
                  HOME OF ISLAMIC KNOWLEDGE AND UNDERSTANDING.
                 </p>
             </div>
         </div>

        </>
         
     )
} export default Home