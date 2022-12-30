import { createContext, useContext, useEffect, useState } from 'react';
const AppLevelContext = createContext();

export function AppLevelContextProvider({children}){
    const [movil, setMovil] = useState(false)

    function setMenuMovil (){
        setMovil(!movil)
    }

    return(
        <AppLevelContext.Provider 
        value={{
            movil,
            setMenuMovil
        }}>
            {children}
        </AppLevelContext.Provider>
    )
}

export function AppContext(){
    return useContext(AppLevelContext)
}