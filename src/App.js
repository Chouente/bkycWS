import React from 'react';
import {useTranslation } from "react-i18next";

import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';


//import page
import Bkyc from './pages/Bkyc';
import Login from './pages/Login';
import Register from './pages/Register';
import Commande from './pages/Commande'
import Product from './pages/Product';
import Cart from './pages/Cart'
import AuthGuard from './_helpers/AuthGuard';

import AdminRouter from './pages/dashbord/AdminRouter';

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={ <Bkyc/> } />
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/*' element={
           <AuthGuard> <AdminRouter/> </AuthGuard> 
        }/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/commande' element={<Commande />}/>
      </Routes>
    </div>
  );
}

export default App;
