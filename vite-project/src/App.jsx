import React, { useState } from 'react'
import Login from './pages/login'
import Register from './pages/register'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Request from './pages/request'


function App() {
  const [isLogin,setLogin]=useState(false)
  localStorage.setItem("isLogin",true)
  return (
    <BrowserRouter>
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="request" element={<Request/>} />
        <Route path="/" element={<Home isLogin={isLogin} setLogin={setLogin}/>}>
       
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App