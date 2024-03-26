

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from "../src/Pages/Homes"
import About from "../src/Pages/About"
function App (){
  return(
     <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='about' element={ <About />}/>
        </Routes>
      </BrowserRouter>
     </>
  )
}export default App