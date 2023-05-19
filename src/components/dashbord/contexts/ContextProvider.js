import React, {createContext, useContext, useState} from 'react'


const StateContext = createContext();

const initialState={
    userProfile: false,
    notification: false,
    messagerie: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsCliked] = useState(initialState);

    const handleClick = (clicked) => {
        setIsCliked({ ...initialState, [clicked]: true});
    }

    const [screenSize, setScreenSize] = useState(undefined);

    return(
        <StateContext.Provider value={{ 
                activeMenu, 
                setActiveMenu, 
                isClicked, 
                setIsCliked, 
                handleClick,
                screenSize,
                setScreenSize        
                
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);