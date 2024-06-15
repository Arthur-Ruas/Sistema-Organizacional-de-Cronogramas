import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Teachers from './pages/Teachers/Teachers';
import Schedule from './pages/Schedule/Schedule';
import ViewSchedule from './pages/ViewSchedule/ViewSchedule';
import ListSchedule from './pages/ListSchedule/ListSchedule';
import ClassRoom from './pages/ClassRoom/ClassRoom';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/teachers" element={<Teachers/>}></Route>
        <Route path="/createSchedule" element={<Schedule/>}></Route>
        <Route path="/viewSchedule" element={<ViewSchedule/>}></Route>
        <Route path="/listSchedule" element={<ListSchedule/>}></Route>
        <Route path="/classRoom" element={<ClassRoom/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes