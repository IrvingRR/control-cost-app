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

    return Object.values(newMovements);
};