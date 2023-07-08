import { createContext, useReducer, useEffect } from "react";
import { movementsReducer } from "../reducers/MovementsReducer";
import { getMovementsService } from "../services/movements";
import { movementsActions } from "../actions/movements";

/**
 * This is the context which allows us to handle the global state of the movements
 * @param {Any} children: Will be all components which will receive the global state
 */

const MainContext = createContext();

const MainProvider = ({ children }) => {

    const initialState = {
        movements: [],
        filter: 'Enero',
        isLoading: false
    };

    const [state, dispatch] = useReducer(movementsReducer, initialState);

    useEffect(() => {
        readMovements();
    }, [state.filter]);

    // This function executes the readMovements action of reducer
    const readMovements = async () => {

        startLoading();

        const movementsDB = await getMovementsService(state.filter);
        
        const action = {
            type: movementsActions.readMovements,
            payload: movementsDB
        };

        stopLoading();

        dispatch(action);
    };

    // This function executes the filterMovements action of reducer
    const filterMovementsByMonth = (filter) => {
        const action = {
            type: movementsActions.filterMovements,
            payload: filter
        };

        dispatch(action);
    };

    //This function executes the addMovement of reducer
    const createMovement = (movement) => {
        const action = {
            type: movementsActions.addMovement,
            payload: movement
        };

        dispatch(action);
    };

    // This function executes the deleteMovement action of reducer
    const deleteMovement = (id) => {
        const action = {
            type: movementsActions.deleteMovement,
            payload: id
        };

        dispatch(action);
    };

    // This function executes the statLoading of reducer
    const startLoading = () => {
        const action = {
            type: movementsActions.startLoading,
        };

        dispatch(action);
    };

    // This function executes the stopLoading of reducer
    const stopLoading = () => {
        const action = {
            type: movementsActions.stopLoading,
        };

        dispatch(action);
    };

    const valueProvider = {
        movements: state.movements,
        filter: state.filter,
        isLoading: state.isLoading,
        filterMovementsByMonth,
        createMovement,
        deleteMovement,
        startLoading,
        stopLoading
    };

    return (
        <MainContext.Provider value={ valueProvider }>
            { children }
        </MainContext.Provider>
    );
}; 

export { MainContext, MainProvider };