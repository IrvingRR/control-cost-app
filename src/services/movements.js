const URL = 'http://localhost:3000/movements';

export const getMovementsService = async (filter) => {

    try {
        
        const request = await fetch(`${URL}?month=${filter}`);
        const response = await request.json();
        
        return response;

    } catch (error) {
        console.log(error);
    }

};

export const createMovementService = async (data) => {

};

export const DeleteMovementService = async(id) => {

};