/**
 * 
 * @param {Object} values: Are the values which will be use in the form 
 * @returns The formatted data
 */

export const prepareDataHelper = (values) => {
    const data = {};

    Object.keys(values).forEach(field => {
        data[field] = values[field].value;
    });

    return data;
};