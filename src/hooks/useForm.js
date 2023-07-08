import { useState } from "react";

/**
 * 
 * @param {Oject} initialState: Are the initial values which has the form 
 * @param {Function} successFunction: Is the function which will be called when the form is correctly fill 
 * @returns An object thie every function to handle the values and the new values
 */

export const useForm = (initialState = {}, successFunction) => {

    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {

        if(e.target.type === 'number' && parseInt(e.target.value) > 0) {
            return setForm({
                ...form,
                [e.target.name]: { 
                    ...form[e.target.name],
                    value: parseInt(e.target.value)
                }
            });
        }

        setForm({
            ...form,
            [e.target.name]: { 
                ...form[e.target.name],
                value: e.target.value 
            }
        });
    };

    const handleInvalidFields = () => {
        const invalidFields = Object.keys(form).filter(field => {
            if(form[field].required && !form[field].value || form[field].required && form[field].value <= 0) {
                return field;
            };
        });

        return invalidFields;
    };

    const handleReset = (e) => {
        setForm(initialState);
        e.target.reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const invalidFields = handleInvalidFields();

        if(invalidFields.length > 0) {
            alert(`Please fill the next fields: ${ invalidFields }`);
        } else {
            successFunction(e);
        }
        
    };

    return {
        form, 
        handleChange,
        handleSubmit,
        handleReset
    };

};