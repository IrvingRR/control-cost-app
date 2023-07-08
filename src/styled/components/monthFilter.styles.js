import styled,  { css } from 'styled-components';

export const MonthsContainer = styled.ul`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        justify-content: center;
    }

`;

export const MonthElement = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    height: 100%;
    padding: 20px;
    background-color: var(--primary-color);
    transition: var(--transition);
    cursor: pointer;

    ${ props => props.selected && css`
        font-weight: bold;
        font-size: var(--fs-l);
    ` }
`;