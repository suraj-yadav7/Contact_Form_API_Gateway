import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from "./pages/Home"
import AllForms from './components/AllForms'

function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/form' element={<AllForms/>} />
          </Routes>
      </Router>
    </>
  )
};

export default App;
