import { movementsActions } from "../actions/movements";

/**
 * 
 * @param {Object} state: Is the state which will be use and update through the actions 
 * @param {Object} action: Is the action which will be used to update the state 
 * @returns Always the current state
 */

export const movementsReducer = (state, action) => {

    switch (action.type) {

        case movementsActions.readMovements: {
            return {
                ...state,
                movements: action.payload
            };
        };

        case movementsActions.filterMovements: {
            return {
                ...state,
                filter: action.payload
            };
        }

        case movementsActions.addMovement: {
            return {
                ...state,
                movements: [...state.movements, action.payload]
            };
        }

        case movementsActions.deleteMovement: {
            return {
                ...state,
                movements: state.movements.filter(movement => movement.id !== action.payload)
            };
        };
        
        case movementsActions.startLoading: {
            return {
                ...state,
                isLoading: true
            };
        };

        case movementsActions.stopLoading: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: return state;

    };

};