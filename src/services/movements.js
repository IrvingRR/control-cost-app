import toast from "react-hot-toast";
/**
 * This service allows us to handle every http request to the fake api
 */

const URL = 'http://localhost:3000/movements';

// This function allows us the movements from the fake api where the month is equal to the filter
export const getMovementsService = async (filter) => {

    try {
        
        const request = await fetch(`${URL}?month=${filter}`);
        const response = await request.json();
        
        return response;

    } catch (error) {
        console.log(error);
    }

};

//This function is responsible for send a post request to create a new movement 
export const createMovementService = async (data) => {
    try {
        
        const request = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        toast.success('Movimiento agregado');
        return response;


    } catch (error) {
        console.log(error);
    }
};

// This function is responsible for send a delete request to delete a movement by id
export const deleteMovementService = async(id) => {
    try {
        
        const request = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        const response = await request.json();
        toast.success('Movimiento eliminado');
        return response;

    } catch (error) {
        console.log(error);
    }
};