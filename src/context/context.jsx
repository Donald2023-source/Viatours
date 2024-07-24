import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralProvider = ({children}) => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
      setNav(!nav)
    }

    return (
        <GeneralContext.Provider value={{
            nav,
            toggleNav
        }}>
            {children}
        </GeneralContext.Provider>
    )
}

