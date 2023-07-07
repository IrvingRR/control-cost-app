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

export const CreateMovement = async (data) => {

};

export const DeleteMovement = async(id) => {

};