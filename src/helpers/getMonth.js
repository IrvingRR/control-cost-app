export const getMonthHelper = (date) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const newDate = new Date(date);
    const month = months[newDate.getMonth()];
    
    return month;
};