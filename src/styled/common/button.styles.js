import styled, { css } from 'styled-components';

export const ButtonElement = styled.button`
    padding: 10px 20px;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 4px;
    cursor: pointer;
    color: var(--white-color);
    font-weight: bold;
    font-size: var(--fs-s);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }
    
    &:disabled {
        background-color: var(--primary-color-disabled);
        cursor: not-allowed;
    }

    /* Variants */

    /* Danger variant */
    ${props => props.variant === 'danger' && css`
        background-color: var(--danger-color);

        &:hover {
            background-color: var(--danger-color-hover);
        }

        &:active {
            background-color: var(--danger-color);
        }
        
        &:disabled {
            background-color: var(--danger-color-disabled);
        }
    `}

    /* Danger variant */
    ${props => props.variant === 'success' && css`
        background-color: var(--success-color);

        &:hover {
            background-color: var(--success-color-hover);
        }

        &:active {
            background-color: var(--success-color);
        }
        
        &:disabled {
            background-color: var(--success-color-disabled);
        }
    `}

    /* Size Small */
    ${props => props.size === 'small' && css`
        padding: 8px 10px;
        font-size: var(--fs-xs);
    `}
`;