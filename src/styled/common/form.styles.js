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

export const FormActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;