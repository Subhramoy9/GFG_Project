import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login';
import Home from './components/Home';
import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </Router>
 
  </>
    
  )
}

export default App