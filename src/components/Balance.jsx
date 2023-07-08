import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { BalanceCard, BalanceValue, Statistics, StatisticsValue, AnalyticsCard, AnalyticsButton } from "../styled/components/balance.styles";
import { MainContext } from '../contexts/MainContext';

export const Balance = () => {

    const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(false);
    const { balance, movements } = useContext(MainContext);

    const handleToggleAnalytics = () => setIsAnalyticsVisible(!isAnalyticsVisible);
    const incomes = movements.filter(movement => movement.type === 'income')
                    .reduce((acc, movement) => acc + movement.amount, 0);

    const spents = movements.filter(movement => movement.type === 'spent')
                   .reduce((acc, movement) => acc + movement.amount, 0);

    return (
        <BalanceCard>
            <h3>Balance del mes</h3>
            <BalanceValue>${balance}</BalanceValue>
            <Statistics>
                <StatisticsValue>
                    <h5>Ingresos</h5>
                    <h2>+${incomes}</h2>
                </StatisticsValue>
                <StatisticsValue>
                    <h5>Gastos</h5>
                    <h2>-${spents}</h2>
                </StatisticsValue>
            </Statistics>
            <AnalyticsButton onClick={handleToggleAnalytics}>
                <span>{isAnalyticsVisible ? 'Ocular analitica' : 'Ver analitica'}</span>
                {isAnalyticsVisible ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
            </AnalyticsButton>
                <AnalyticsCard showAnalytics={isAnalyticsVisible}>
                    <h2>Data analityc</h2>
                </AnalyticsCard>
        </BalanceCard>
  );
};