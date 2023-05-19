import React from 'react';
import { useEffect, useState } from 'react';
import {RxPinTop} from 'react-icons/rx'
import '../styles/BackToTopButton.css'


const BackToTupButton = () => {

    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollup =() => {
        window.scrollTo({
            top: 0,
            behabior: 'smooth'
        })
    }

    return (
        <div className='boutontop'>
            {BackToTopButton && (
                <button style={{
                    position:'fixed',
                    bottom:'50px',
                    right:'50px',
                    height:'50px',
                    width:'50px',
                    padding:'17px',
                }}
                onClick={scrollup}> 
                <RxPinTop color='white'/> </button>
            )}
        </div>
    );
};

export default BackToTupButton;