import styled, { css } from 'styled-components';

export const BalanceCard = styled.div`
    width: 100%;
    border-radius: var(--radius);
    background-color: var(--background-secondary-color);
    box-shadow: var(--shadow);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

export const BalanceValue = styled.h2`
    font-size: var(--fs-xl);
    color: var(--primary-color);
`;

export const Statistics = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StatisticsValue = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding: 5px 20px;
    color: var(--success-color);
    font-size: var(--fs-m);
    font-weight: bolder;

    &:nth-child(2) {
        color: var(--danger-color);
        border-left: 1px solid var(--border-color);
    }
`;

export const AnalyticsButton = styled.button`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    font-size: var(--fs-s);
    color: #ccc;
    background-color: transparent;
`;

export const AnalyticsCard = styled.div`
    width: 100%;
    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 0;
    padding: 0 20px;
    overflow: hidden;
    transition: var(--transition);
    border: var(--initial-border);
    gap: 20px;
    background-color: var(--background-primary-color);
    opacity: 0;
    visibility: hidden;
    
    ${props => props.show === 'true' && css`
        height: 200px;
        padding: 20px;
        opacity: 1;
        visibility: visible;
    `}
`;

export const AnalyticsContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const AnalyticsElement = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    border-radius: var(--radius);
    background-color: var(--background-secondary-color);
    gap: 10px;
    box-shadow: var(--shadow);
    
    svg {
        font-size: var(--fs-xl);
        color: var(--success-color);
    }
    
    h2 {
        color: var(--success-color);
    }

    ${props => props.variant === 'spents' && css`

        svg {
            color: var(--danger-color);
        }

        h2 {
            color: var(--danger-color);
        }
    `}
`