import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

//import page
import Bkyc from './pages/Bkyc';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminRouter from './pages/dashbord/AdminRouter';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Bkyc/> } />
        <Route path='/admin/*' element={<AdminRouter/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
