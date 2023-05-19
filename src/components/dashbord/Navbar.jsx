import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {BiMessageAltDetail} from 'react-icons/bi';
import {RiNotification3Line} from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CTooltip } from '@coreui/react';
import avatar from '../../images/chantier.jpg'
import {UserProfile, Notification, Messagerie} from './index';
import { useStateContext } from './contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor}) => (
    <CTooltip content={title} placement='bottom'>
        <button type='button' onClick={customFunc}
            style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'
        >
            <span style={{background: dotColor}} 
                  className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2 text-xl'
            />
                {icon}
        </button>
    </CTooltip>
)

const Navbar = () => {

    const {activeMenu, setActiveMenu, 
            isClicked, setIsClicked, 
            handleClick, 
            screenSize, setScreenSize} = useStateContext();

            useEffect(() => {
                const handleResize = () => setScreenSize(window.innerWidth);

                window.addEventListener('resize', handleResize);

                handleResize();

                return () => window.removeEventListener('resize', handleResize);
            }, []);

            useEffect(() =>{
                if(screenSize <= 900){
                    setActiveMenu(false);
                } else {
                    setActiveMenu(true);
                }
            }, [screenSize]);



    return (
        <div className='flex justify-between p-2 md:mx-6 relative w-full'>
            <NavButton title='menu' 
                customFunc={()=> setActiveMenu((preActiveMenu)=> !preActiveMenu)} 
                color='green' 
                icon={<AiOutlineMenu/>}
            />

            <div className='flex '>
                <NavButton title='messagerie'
                    dotColor='orange'
                    customFunc={() => handleClick('messagerie')} 
                    color='green' icon={<BiMessageAltDetail/>}    
                />
                <NavButton title='Notification'
                    dotColor='orange'
                    customFunc={() => handleClick('notification')} 
                    color='green' icon={<RiNotification3Line/>}    
                />
                <CTooltip content='profile' placement='bottom'>
                    <div className='flex items-center gap-2 cursor-pointer p-1 
                        hover:bg-light-gray rounded-lg' 
                        onClick={() => handleClick('userProfile')}>
                            <img className='rounded-full w-8 h-8' src={avatar} alt='avatar de l&apos;utilisateur'/>
                            <p>
                                <span className='text-gray-400 text-14'> 
                                    Hi, </span> {' '}
                                <span className='text-gray-400 font-bold ml-1 text-14'> 
                                    UserName </span>
                            </p>
                            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
                    </div>
                </CTooltip>

                {isClicked.notification && <Notification/>}
                {isClicked.userProfile && <UserProfile/>}
                {isClicked.messagerie && <Messagerie/>}

                
            </div>
            
        </div>
    );
};

export default Navbar;