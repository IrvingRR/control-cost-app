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
    background-color: rgba(0, 0, 0, 0.8);
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
    
    @media screen and (min-width: 768px) {
        transform: translate(0, -100%);

        ${props => props.isModalOpen && css`
            transform: translate(0, 0);
        `}
        
    }
`;

export const ButtonCloseModal = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: var(--fs-xl);
    background-color: transparent;
`;