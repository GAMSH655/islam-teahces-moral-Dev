import img from '../src/assets/katib.png'
import './Home.css'

  
 function Home(){
     return(
        <>
         <div className='Home'>
                <div className="imgCont">
                <img src={img} alt="" id='katibImg' />
                </div>
             <div className="textbox">
                 <p className="text1">asalaam alykum warohmotullahi wabarakaatuhu.</p>
                
                 <p className="introTExt">
                   am ustaz abdul-hammed abdul azeez al-kaatib the founder of islam teaches moral.
                 </p>
             </div>
         </div>

        </>
         
     )
} export default Home