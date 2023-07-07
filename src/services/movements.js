const URL = 'http://localhost:3000/movements';

export const getAllMovementsService = async () => {

    try {
        
        const request = await fetch(URL);
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