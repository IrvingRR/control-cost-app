import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    background-color: var(--background-secondary-color);
    border-radius: var(--radius);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;

    h2 {
        font-size: var(--fs-m);
    }
`;

export const FormActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
`;

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: var(--transition);
`;

export const FieldContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const InputElement = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    transition: var(--transition);
    border-color: var(--gray-color);
    background-color: var(--gray-color);
    border-radius: var(--radius);
    font-size: var(--fs-s);
    
    &:focus {
        background-color: transparent;
    }
`;

export const Legend = styled.div`
    width: 100%;
    padding: 10px 20px;
    background-color: var(--danger-color);
    color: var(--white-color);
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: var(--radius);
    font-size: var(--fs-s);
    transition: var(--transition);
    height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    
    ${props => !props.isValid && css`
        height: auto;
        opacity: 1;
        visibility: visible;
    `}
`;

export const Label = styled.label`
    width: 100%;
    padding: 5px 0;
    font-size: var(--fs-s);
`;

export const TextAreaElement = styled.textarea`
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    transition: var(--transition);
    border-color: var(--gray-color);
    background-color: var(--gray-color);
    border-radius: var(--radius);
    resize: none;
    
    &:focus {
        background-color: transparent;
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px 20px;
    border-radius: var(--radius);
    background-color: var(--gray-color);
    border-color: var(--gray-color);
    font-size: var(--fs-s);
    cursor: pointer;

    &:focus {
        background-color: transparent;
    }
`;