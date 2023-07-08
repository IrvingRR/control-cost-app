export const prepareDataHelper = (values) => {
    const data = {};

    Object.keys(values).forEach(field => {
        data[field] = values[field].value;
    });

    return data;
};