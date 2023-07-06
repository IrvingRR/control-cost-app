import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .button-container {
        position: absolute;
        bottom: 20px;
    }
    
    @media screen and (min-width: 768px) {
        .button-container {
            position: relative;
            bottom: 0;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        width: 600px;
    }
`;