import { getMonthHelper } from "./getMonth";

export const formatDateHelper = (date) => {
    if(!date) return;

    const dateMovement = new Date(date);
    const month = getMonthHelper(date);

    const dateFormatted = `${dateMovement.getDate()} ${month}`;

    console.log(dateFormatted);
    
};