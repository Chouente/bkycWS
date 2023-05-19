import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TbToolsKitchen } from 'react-icons/tb'
import { CTooltip } from '@coreui/react';


import { links } from '../../data/data';
import { useStateContext } from './contexts/ContextProvider';

const Sidebar = () => {


    const {activeMenu, setActiveMenu, screenSize }= useStateContext();

    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 900){
            setActiveMenu(false)
        }
    }

    const activeLink = 'flex no-underline items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md m-2 bg-green-500 text-white';
    const normalLink = 'flex no-underline items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover: text-black hover:bg-light-gray m-2';

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
             {activeMenu && (<>
                <div className='flex justify-between linkss-center'>
                    <Link to='/admin/dashbord' onClick={handleCloseSideBar} className='linkss-center gap-3 ml-3 mt-4 flex text-xl 
                            font-extrabold tracking-tight dark:text-white text-slate-900'>
                        <TbToolsKitchen/> <span> BKYC </span>
                    </Link>
                    <CTooltip 
                        content='close'
                        placement='bottom'
                    >
                        <button type='button'
                            onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
                        >
                            <MdOutlineCancel/>
                        </button>
                    </CTooltip>
                </div>
                <div className='mt-10'>
                    {links.map((links) => (
                        <div key={links.id}>
                            <NavLink
                                to={`/admin/${links.name}`}
                                onClick={handleCloseSideBar}
                                className={({isActive}) => isActive ? activeLink : normalLink}
                            >
                                {links.icon}
                                <span className='capitalize'> {links.name} </span>
                            </NavLink>
                        </div>
                    ))}
                </div>
             
             </>)}
        </div>
    );
};

export default Sidebar;