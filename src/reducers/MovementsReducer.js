import { movementsActions } from "../actions/movements";

export const movementsReducer = (state, action) => {

    switch (action.type) {

        case movementsActions.readMovements: {
            return {
                ...state,
                movements: action.payload
            };
        }

        case movementsActions.addMovement: 
            return console.log('Adding movement...');

        case movementsActions.deleteMovement: 
            return console.log('Deleting movement...');

    
        default: return state;

    };

};