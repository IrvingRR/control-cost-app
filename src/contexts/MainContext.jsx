import { createContext, useState } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {

    const [movements, setMovements] = useState([]);
    
    return (
        <MainContext.Provider value={{ movements }}>
            { children }
        </MainContext.Provider>
    );
}; 

export { MainContext, MainProvider };