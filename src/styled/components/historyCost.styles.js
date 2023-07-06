import styled, {css} from 'styled-components';

export const HistoryCostContainer = styled.div`
    width: 100%;
    border-radius: var(--radius);
    background-color: var(--background-secondary-color);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
`;

export const HistoryContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    
`;

export const HistoryTitle = styled.div`
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

    ${props => props.typeCost === 'spent' && css`
        color: var(--danger-color);
    `}

    ${props => props.typeCost === 'income' && css`
        color: var(--success-color);
    `}
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

export const HistoryInformation = styled.div`
    width: 100%;
    padding: 10px;
    /* border: 1px solid var(--border-color); */
    font-size: var(--fs-s);
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 0;
    padding: 0 10px;
    overflow: hidden;
    transition: var(--transition);

    ${props => props.showInformation && css`
        height: auto;
        padding: 10px;
    `}
`;

export const HistoryCostTags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    max-height: 100px;
    overflow: auto;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
`;

export const HistoryCostTag = styled.span`
    border-radius: var(--radius);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--success-color);
    color: var(--success-color-hover);
    padding: 10px;

    ${props => props.typeCost === 'spent' && css`
        background-color: var(--danger-color);
        color: var(--danger-color-hover);
    `}

    ${props => props.typeCost === 'income' && css`
        background-color: var(--success-color);
        color: var(--success-color-hover);
    `}
`;