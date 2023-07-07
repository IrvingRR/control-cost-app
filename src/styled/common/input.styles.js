import styled, { css } from 'styled-components';

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
    border-color: var(--background-primary-color);
    background-color: var(--background-primary-color);
    border-radius: var(--radius);
    
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
    padding: 10px 0;
`;