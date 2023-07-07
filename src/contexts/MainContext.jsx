import { createContext, useReducer } from "react";
import { movementsReducer } from "../reducers/MovementsReducer";

const MainContext = createContext();

const MainProvider = ({ children }) => {

    const initialState = {
        movements: [],
        costs: []
    };

    const [state, dispatch] = useReducer(movementsReducer, initialState);

    return (
        <MainContext.Provider value={{ }}>
            { children }
        </MainContext.Provider>
    );
}; 

export { MainContext, MainProvider };