import styled from 'styled-components';

export const HistoryContainer = styled.div`
    width: 100%;
    max-height: 200px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const HistoryMessage = styled.h4`
    width: 100%;
    text-align: center;

    span {
        color: var(--primary-color);
    }
`;