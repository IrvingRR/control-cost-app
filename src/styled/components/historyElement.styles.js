import styled from 'styled-components';


export const HistoryElementContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const HistoryCost = styled.div`
    width: 100%;
    border-radius: var(--radius);
    background-color: var(--background-secondary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-shadow: var(--shadow);
`;

export const HistoryInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--fs-m);
`;

export const HistoryCostActions = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const HistoryCostSymbol = styled.span`
    width: 30px;
    height: 30px;
    border-radius: var(--radius);
    background-color: var(--danger-color);
`;

export const HistoryCostAmount = styled.h3`
    font-size: var(--fs-l);
`;

export const HistoryCostButton = styled.button`
    background-color: transparent;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-colorS);

    svg {
        font-size: var(--fs-s);
    }
`;