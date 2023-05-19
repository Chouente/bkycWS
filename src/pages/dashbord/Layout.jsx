import React from 'react';
import {Navbar, Sidebar} from '../../components/dashbord';
import { Outlet } from 'react-router-dom';

import { useStateContext } from '../../components/dashbord/contexts/ContextProvider';



const Layout = () => {
    const { activeMenu } = useStateContext();


    return (
        <div className='flex relative dark:bg-main-dark-bg dashbord_page'>
            
            {activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> 
                    <Sidebar />
                </div>
            ) : (
                <div className='w-0 dark:bg-secondary-dark-bg sidebar_two'> 
                    <Sidebar/>
                </div>
            )}

            <div className={
                `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72': 'flex-2'}`
            }>
                <div className='fixed md:static dark:bg-main-dark-bg navbar w-full'>
                    <Navbar />
                </div>
            
                <div> 
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;