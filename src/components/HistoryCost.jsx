import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HistoryCostContainer, HistoryContent, HistoryTitle, HistoryCostSymbol, HistoryCostActions, HistoryCostAmount, HistoryCostButton, HistoryInformation, HistoryCostTags, HistoryCostTag } from "../styled/components/historyCost.styles";

export const HistoryCost = () => {

    const [isInformationVisible, setIsInformationVisible] = useState(false);

    const handleToggleInformation = () => setIsInformationVisible(!isInformationVisible);

    return (
        <HistoryCostContainer>
            <HistoryContent>
                <HistoryTitle>
                    <HistoryCostSymbol/>
                    <strong>Uber</strong>
                </HistoryTitle>
                <HistoryCostActions>
                    <HistoryCostAmount typeCost='spent'>-$97.63</HistoryCostAmount>
                    <HistoryCostButton onClick={handleToggleInformation}>
                        {isInformationVisible ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                    </HistoryCostButton>
                </HistoryCostActions>
            </HistoryContent>
            <HistoryInformation showInformation={isInformationVisible}>
                <strong>Descricion:</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, atque?</p>
                <HistoryCostTags>
                    <HistoryCostTag typService=''>Servicio</HistoryCostTag>
                    <HistoryCostTag typeCost='spent'>Ingreso</HistoryCostTag>
                </HistoryCostTags>
            </HistoryInformation>
        </HistoryCostContainer>
    );
};