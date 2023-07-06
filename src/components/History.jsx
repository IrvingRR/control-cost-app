import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HistoryContainer, HistoryElement, HistoryCost, HistoryCostSymbol, HistoryCostAmount, HistoryInformation, HistoryCostActions, HistoryCostButton } from "../styled/components/history.styles";

export const History = () => {
  return (
    <HistoryContainer>
        <HistoryElement>
            <strong>Hoy - 7 Jul</strong>
            <HistoryCost>
                <HistoryInformation>
                    <HistoryCostSymbol/>
                    <strong>Uber</strong>
                </HistoryInformation>
                <HistoryCostActions>
                    <HistoryCostAmount>-$97.63</HistoryCostAmount>
                    <HistoryCostButton>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </HistoryCostButton>
                </HistoryCostActions>
            </HistoryCost>
        </HistoryElement>
    </HistoryContainer>
  );
};