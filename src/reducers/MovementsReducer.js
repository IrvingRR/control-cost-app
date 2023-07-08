import { movementsActions } from "../actions/movements";

export const movementsReducer = (state, action) => {

    switch (action.type) {

        case movementsActions.readMovements: {
            return {
                ...state,
                movements: action.payload
            };
        };

        case movementsActions.filterMovements:
            return {
                ...state,
                filter: action.payload
            };

        case movementsActions.addMovement: 
            return {
                ...state,
                movements: [...state.movements, action.payload]
            };

        case movementsActions.deleteMovement: 
            return console.log('Deleting movement...');

    
        default: return state;

    };

};