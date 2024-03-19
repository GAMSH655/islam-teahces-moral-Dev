import './Faqs.css'
import { useState } from 'react'
function FAQS(props){
      
const [IsOpen , setIsOpen ] = useState(false)
const ToggleAccordion = () =>{
  setIsOpen(!IsOpen)
}
  
     
     return(
         <div>
                <div>
                {/* <h3 className="FAQSUPPERTEXT">FAQS</h3> */}
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <div className="Faqs active"  onClick={ToggleAccordion}>
                    <div className="accordionHeader" >
                      {props.questionAsked}  <i className="fa-solid fa-chevron-up fa-2xl">  </i>
                    </div>
                      <div className = {`answerContainer ${IsOpen ? "active" : ""}`} >
                       <p>{props.answerText}</p>
                      </div>
                   </div> 
            </div> 
         </div>
     )
}export default FAQS