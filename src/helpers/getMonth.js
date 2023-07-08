/**
 * @param {Date} date: Is the date from we want to get the month value 
 * @returns {String} month: Return the month value
 */

export const getMonthHelper = (date) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const newDate = new Date(date);
    const month = months[newDate.getMonth()];
    
    return month;
};