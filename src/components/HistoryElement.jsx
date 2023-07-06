import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HistoryElementContainer, HistoryCost, HistoryInformation, HistoryCostActions, HistoryCostAmount, HistoryCostButton, HistoryCostSymbol } from "../styled/components/historyElement.styles";

export const HistoryElement = () => {
  return (
    <HistoryElementContainer>
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
    </HistoryElementContainer>
  );
};