import { createContext, useReducer, useEffect } from "react";
import { movementsReducer } from "../reducers/MovementsReducer";
import { getMovementsService } from "../services/movements";
import { movementsActions } from "../actions/movements";

const MainContext = createContext();

const MainProvider = ({ children }) => {

    const initialState = {
        movements: [],
        filter: 'Enero'
    };

    const [state, dispatch] = useReducer(movementsReducer, initialState);

    useEffect(() => {
        readMovements();
    }, [state.filter]);

    const readMovements = async () => {

        const movementsDB = await getMovementsService(state.filter);
        
        const action = {
            type: movementsActions.readMovements,
            payload: movementsDB
        };

        dispatch(action);
    };

    const filterMovementsByMonth = (filter) => {
        const action = {
            type: movementsActions.filterMovements,
            payload: filter
        };

        dispatch(action);
    };

    return (
        <MainContext.Provider value={{ movements: state.movements, filter: state.filter, filterMovementsByMonth }}>
            { children }
        </MainContext.Provider>
    );
}; 

export { MainContext, MainProvider };