import { useState } from 'react'
import './App.css'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Signin from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Headers from './Component/Header.jsx'


function App() {


  return (
    <>
        <BrowserRouter>
          <Headers />
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/sign-in' element={<Signin></Signin>}></Route>
            <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
