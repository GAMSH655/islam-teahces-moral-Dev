import './Faqs.css'
import { useState } from 'react'
function FAQS(props){
      
const [header , setHeader] = useState(false)
    function handleHeaderClick(){
         console.log("click")
    }


     return(
         <div>
             {/* <h3 className="FAQSUPPERTEXT">FAQS</h3> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
             <div>
             <div className="Faqs" onClick={()=>handleHeaderClick}>
                 <div className="accordionHeader">
                   {props.questionAsked}  <i className="fa-solid fa-chevron-up fa-2xl">  </i>
                 </div>
                   <div className="answerContainer">
                      {props.answerText}
                   </div>
                </div> 
             </div>
                
         </div> 
     )
}export default FAQS