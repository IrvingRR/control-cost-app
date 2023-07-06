import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-primary-color);
    padding: 20px;
    transform: translateX(-100%);
    visibility: hidden;
    opacity: 0;
    transition: var(--transition);
    
    ${props => props.isModalOpen && css`
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
    `}
`;

export const ButtonCloseModal = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-color);
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: var(--fs-xl);
    background-color: transparent;
`;