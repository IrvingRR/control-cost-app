/**
 * 
 * @param {Array} movements: Are the movements which we want to order 
 * @returns The movements ordered
 */

export const orderMovementsHelper = (movements) => {
    const newMovements = {};

    for(let movement of movements) {
        
        if(movement.date in newMovements) {
            newMovements[movement.date].movements.push(movement);
        } else {
            newMovements[movement.date] = {
                date: movement.date,
                movements: [movement]
            }
        }
    };

    let sortMovements = Object.values(newMovements).sort((x, y) => x.date.localeCompare(y.date));
    return sortMovements;
};