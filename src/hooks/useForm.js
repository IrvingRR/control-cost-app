import { useState } from "react"

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const invalidFields = handleInvalidFields();

        if(invalidFields.length > 0) {
            alert(`Please fill the next fields: ${ invalidFields }`);
        } else {
            successFunction();
        }
        
    };

    return {
        form, 
        handleChange,
        handleSubmit    
    };

};