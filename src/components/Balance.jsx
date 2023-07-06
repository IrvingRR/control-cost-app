import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { BalanceCard, BalanceValue, Statistics, StatisticsValue, AnalyticsCard, AnalyticsButton } from "../styled/components/balance.styles";

export const Balance = () => {

    const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(false);

    const handleToggleAnalytics = () => setIsAnalyticsVisible(!isAnalyticsVisible);

    return (
        <BalanceCard>
            <h3>Balance del mes</h3>
            <BalanceValue>$1070.15</BalanceValue>
            <Statistics>
                <StatisticsValue>
                    <h5>Ingresos</h5>
                    <h2>+$478.32</h2>
                </StatisticsValue>
                <StatisticsValue>
                    <h5>Gastos</h5>
                    <h2>-$1452.50</h2>
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