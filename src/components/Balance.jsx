import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faArrowDownShortWide, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import { BalanceCard, BalanceValue, Statistics, StatisticsValue, AnalyticsCard, AnalyticsElement, AnalyticsButton, AnalyticsContent } from "../styled/components/balance.styles";
import { MainContext } from '../contexts/MainContext';

/**
 * This is the component which will be displayed all information about the balance
 * using the incomes and spents values. As well this components will display the analytics values
 */

export const Balance = () => {

    const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(false);
    const { movements } = useContext(MainContext);

    const handleToggleAnalytics = () => setIsAnalyticsVisible(!isAnalyticsVisible);

    // Get total value of incomes and spents to display in the component
    const incomes = movements.filter(movement => movement.type === 'income').reduce((acc, movement) => acc + movement.amount, 0);
    const spents = movements.filter(movement => movement.type === 'spent').reduce((acc, movement) => acc + movement.amount, 0);
    const balance = incomes - spents;

    // Get the percentage of incomes and spents
    const incomesPercent = Math.floor((incomes * 100) / balance);
    const spentsPercent = Math.floor((spents * 100) / balance);

    return (
        <BalanceCard>
            <h3>Balance del mes</h3>
            <BalanceValue>${ balance }</BalanceValue>
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
                <AnalyticsCard show={isAnalyticsVisible.toString()}>
                    <h4>Analiticas porcentuales</h4>
                    <AnalyticsContent>
                        <AnalyticsElement variant='incomes'>
                            <h3>Ingresos</h3>
                            <h2>{incomesPercent}%</h2>
                            <FontAwesomeIcon icon={faArrowUpShortWide}/>
                        </AnalyticsElement>
                        <AnalyticsElement variant='spents'>
                            <h3>Gastos</h3>
                            <h2>{spentsPercent}%</h2>
                            <FontAwesomeIcon icon={faArrowDownShortWide}/>
                        </AnalyticsElement>
                    </AnalyticsContent>
                </AnalyticsCard>
        </BalanceCard>
  );
};