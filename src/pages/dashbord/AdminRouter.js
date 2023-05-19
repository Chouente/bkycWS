import React from 'react';
import {Route, Routes} from 'react-router-dom'

import {Commandes, Menu, Message, Produit, Utilisateurs, Dashbord, Layout} from './index'

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='order' element={<Commandes/>} />
                    <Route path='messages' element={<Message/>}/>
                    <Route path='products' element={<Produit/>}/>
                    <Route path='menu' element={<Menu/>}/>
                    <Route path='dashbord' element={<Dashbord/>}/>
                    <Route path='users' element={<Utilisateurs/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default AdminRouter;