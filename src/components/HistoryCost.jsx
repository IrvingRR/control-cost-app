import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HistoryCostContainer, HistoryContent, HistoryTitle, HistoryCostSymbol, HistoryCostActions, HistoryCostAmount, HistoryCostButton, HistoryInformation, HistoryActions } from "../styled/components/historyCost.styles";
import { Button } from '../common';

export const HistoryCost = ({ data }) => {

    const [isInformationVisible, setIsInformationVisible] = useState(false);

    const handleToggleInformation = () => setIsInformationVisible(!isInformationVisible);

    return (
        <HistoryCostContainer>
            <HistoryContent>
                <HistoryTitle>
                    <HistoryCostSymbol category={data.category}/>
                    <strong>{data.title}</strong>
                </HistoryTitle>
                <HistoryCostActions>
                    <HistoryCostAmount typeCost={data.type}>{data.type === 'spent' ? '-$' : '+$'}{data.amount}</HistoryCostAmount>
                    <HistoryCostButton onClick={handleToggleInformation}>
                        {isInformationVisible ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                    </HistoryCostButton>
                </HistoryCostActions>
            </HistoryContent>
            <HistoryInformation showInformation={isInformationVisible}>
                {/* <strong>Descripción:</strong> */}
                <p>{ data.description ? data.description : 'Sin descripción' }</p>
                <HistoryActions>
                    <Button label='Edit' size='small'/>
                    <Button label='Delete' variant='danger' size='small'/>
                </HistoryActions>
            </HistoryInformation>
        </HistoryCostContainer>
    );
};