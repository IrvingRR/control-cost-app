import styled from 'styled-components';

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: var(--transition);
`;

export const TextAreaElement = styled.textarea`
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

export const Label = styled.label`
    width: 100%;
    padding: 5px 0;
    font-size: var(--fs-s);
`;