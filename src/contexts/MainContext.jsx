import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { movementsReducer } from "../reducers/MovementsReducer";
import { movementsActions } from "../actions/movements";
import { getAllMovementsService } from "../services/movements";

const MainContext = createContext();

const MainProvider = ({ children }) => {

    const initialState = {
        movements: []
    };

    const [state, dispatch] = useReducer(movementsReducer, initialState);

    useEffect(() => {

        readMovements();

    }, []);

    const readMovements = async () => {

        const movements = await getAllMovementsService();

        const action = {
            type: movementsActions.readMovements,
            payload: movements
        };

        dispatch(action);
    };

    const addMovement = () => {
        const action = {
            type: movementsActions.addMovement
        };

        dispatch(action);
    };

    const deleteMovement = () => {
        const action = {
            type: movementsActions.deleteMovement
        };

        dispatch(action);
    };
    
    return (
        <MainContext.Provider value={{ addMovement, deleteMovement, movements: state.movements }}>
            { children }
        </MainContext.Provider>
    );
}; 

export { MainContext, MainProvider };