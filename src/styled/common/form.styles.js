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

    h2 {
        font-size: var(--fs-m);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px 20px;
    transition: var(--transition);
    border-color: var(--background-primary-color);
    background-color: var(--background-primary-color);
    border-radius: var(--radius);
    resize: none;
    
    &:focus {
        background-color: transparent;
    }
`;

export const FormActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;