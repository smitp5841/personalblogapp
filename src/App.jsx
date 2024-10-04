import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router';
import Home from './Componets/Home/Home';
import AddData from './Componets/AddData/AddData';
import Edit from './Componets/Edit/Edit';
import Header from './Componets/Header/Header'
import RegisterPage from './Componets/login/RegisterPage';
import LoginPage from './Componets/login/LoginPage';
function App() {
  
  return (
    <>
     
     <Routes>
        <Route path='/home' element={<Home/>}  />
        <Route  path='/adddata' element={<AddData/>} />
        <Route  path='/registerPage' element={<RegisterPage/>} />
        <Route  path='/' element={<LoginPage/>} />
        
        <Route path='/edit/:id' element={<Edit/>} />

     </Routes>

    </>
  )
}

export default App
