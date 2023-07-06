import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    padding: 20px;

    @media screen and (min-width: 768px) {
        width: 600px;
    }
`;