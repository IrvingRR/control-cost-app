import { getMonthHelper } from "./getMonth";

/**
 * This helper is responsible for return the date with the correct format
 * @param {Date} date: Is the date which we want to apply the correct format
 * @returns {String} dateFormatted: Is the correct date formatted
 */

// This function is responsible for getting the yesterday date
const yesterdayDate = () => {
    const today = new Date();
    const DAY_IN_MILSECONDS = 24 * 60 * 60 * 1000;
    const yesterday = new Date(today.getTime() - DAY_IN_MILSECONDS);
    return yesterday;
}

// This function allows us to apply the correct format to the date received as param
export const formatDateHelper = (date) => {
    if(!date) return;
    const today = new Date();
    const yesterday = yesterdayDate();
 
    const dateMovement = new Date(date);
    const month = getMonthHelper(date).split('').splice(0, 3).join('');
    let dateFormatted = '';

    const dateMovementFormat = `${dateMovement.getFullYear()}-${dateMovement.getMonth() + 1}-${dateMovement.getDate() + 1}`;
    const dateTodayFormat = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const dateYesterdayFormat = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;

    if(dateMovementFormat === dateTodayFormat) {
        dateFormatted = `Hoy - ${dateMovement.getDate() + 1} ${month}`;
    } else if (dateMovementFormat === dateYesterdayFormat) {
        dateFormatted = `Ayer - ${dateMovement.getDate() + 1} ${month}`;
    } else {
        dateFormatted = `${dateMovement.getDate() + 1} ${month}`;
    }
    
    return dateFormatted;
};