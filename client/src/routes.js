import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Teachers from './pages/Teachers/Teachers';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/teachers" element={<Teachers/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes