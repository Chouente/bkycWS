import React from 'react';
import {Route, Routes} from 'react-router-dom'

import {Commandes, Menu, Message, Produit, Utilisateurs, Dashbord, Layout, 
    
        ViewMessage, AddProduct, AddMenu, ViewMenu, ViewProduct, AddUsers} from './index'

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='order' element={<Commandes/>} />
                    <Route path='messages' element={<Message/>}/>
                    <Route path='messages/messageView/:id' element={<ViewMessage/>}/>

                    {/* products route  */}
                    <Route path='products' element={<Produit/>}/>
                    <Route path='products/add' element={<AddProduct/>}/>
                    <Route path='products/productsView/:id' element={<ViewProduct/>}/>

                    {/* menu route*/}
                    <Route path='menu' element={<Menu/>}/>
                    <Route path='menu/add' element = {<AddMenu/>}/>
                    <Route path='menu/menuView/:id' element={<ViewMenu/>}/>


                    <Route path='dashbord' element={<Dashbord/>}/>

                    {/* users route */}
                    <Route path='users' element={<Utilisateurs/>}/>
                    <Route path='users/add' element={<AddUsers/>}/>
                    
                </Route>
            </Routes>
        </div>
    );
};

export default AdminRouter;