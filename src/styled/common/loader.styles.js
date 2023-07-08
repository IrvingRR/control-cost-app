import styled, { css } from 'styled-components';

export const ContainerLoader = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    transition: var(--transition);
    background-color: var(--background-primary-color);
    opacity: 0;
    visibility: hidden;
    
    ${props => props.loading === 'true' && css`
        opacity: 1;
        visibility: visible;
    `}
`;

export const Spinner = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 3px solid var(--border-color);
    border-right-color: var(--primary-color);
    transition: var(--transition);
    animation: spinnerRotation 1s infinite linear;
    
`;