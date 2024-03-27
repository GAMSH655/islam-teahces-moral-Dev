

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from "../src/Pages/Homes"
import About from "../src/Pages/About"
import Activities from "../src/Pages/Activites"
function App (){
  return(
     <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='about' element={ <About />}/>
            <Route  path='/activities' element={<Activities />}/> 
        </Routes>
      </BrowserRouter>
     </>
  )
}export default App