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
    try {
        
        const request = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;


    } catch (error) {
        console.log(error);
    }
};

export const DeleteMovementService = async(id) => {

};