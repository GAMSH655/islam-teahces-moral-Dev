import Img from '../assets/itmImg.jpg'
import './Footer.css'
 function Footer(){
    return(
        <div >
              <div className="footer">
               <div className="firtsCont">
               <img src={Img} alt="" className='logo' />
                  <h3 className="footerLogoText">islam teaches moral</h3>
                  <p className="footext1">ISLAM TEACHES MORAL</p>
                     <p className="foExt">
                        HOME OF ISLAMIC KNOWLEDGE <br /> AND UNDERSTANDING.
                     </p>
                     <div className="iconContainers2">
                     <a href="https://www.facebook.com/people/Islam-teaches-moral/100076434553906/?mibextid=LQQJ4d"><i className="fa-brands fa-facebook "></i></a>
                        <a href="https://www.instagram.com/islam_teaches_moral?igsh=ajI5cjJvOWlxZ3Uy&utm_source=qr"><i className="fa-brands fa-instagram"></i></a>
                     <a href="  https://twitter.com/itmchannel/"> <i className="fa-brands fa-twitter "></i></a>
                     </div>
               </div>
             <div className="activites">
                     <h3 className="activityUpperTExt">activity</h3>
                     <div className="inner">
                     <p className="activtiyp">islamic-teaching</p>
                     <p className="activtiyp">arabic-class</p>
                     <p className="activtiyp">spiritual-counselling</p>
                     <p className="activtiyp">weekly-islamic-nuggest</p>
                     </div>
                
             </div>
             <div className="activites">
               <h3 className="activityUpperTExt">activity</h3>
                <div className="inner">
                <p className="activtiyp">islamic-teaching</p>
                <p className="activtiyp">arabic-class</p>
                <p className="activtiyp">spiritual-counselling</p>
                <p className="activtiyp">weekly-islamic-nuggest</p>
                </div>
             </div>
             <div className="activites">
               <h3 className="activityUpperTExt">activity</h3>
                <div className="inner">
                <p className="activtiyp">islamic-teaching</p>
                <p className="activtiyp">arabic-class</p>
                <p className="activtiyp">spiritual-counselling</p>
                <p className="activtiyp">weekly-islamic-nuggest</p>
                </div>
             </div>
        </div>
        </div>
    )
 }export default Footer;