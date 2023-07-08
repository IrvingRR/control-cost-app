import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HistoryCostContainer, HistoryContent, HistoryTitle, HistoryCostSymbol, HistoryCostActions, HistoryCostAmount, HistoryCostButton, HistoryInformation, HistoryActions } from "../styled/components/historyCost.styles";
import { Button } from '../common';
import { MainContext } from '../contexts/MainContext';
import { deleteMovementService } from '../services/movements';

export const HistoryCost = ({ data }) => {

    const { deleteMovement } = useContext(MainContext);
    const [isInformationVisible, setIsInformationVisible] = useState(false);

    const handleToggleInformation = () => setIsInformationVisible(!isInformationVisible);
    
    const handleDeleteMovement = async () => {
        await deleteMovementService(data.id);
        deleteMovement(data.id);
    };

    return (
        <HistoryCostContainer>
            <HistoryContent>
                <HistoryTitle>
                    <HistoryCostSymbol category={data.category}/>
                    <strong>{data.title}</strong>
                </HistoryTitle>
                <HistoryCostActions>
                    <HistoryCostAmount type={data.type}>{data.type === 'spent' ? '-$' : '+$'}{data.amount}</HistoryCostAmount>
                    <HistoryCostButton onClick={handleToggleInformation}>
                        {isInformationVisible ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                    </HistoryCostButton>
                </HistoryCostActions>
            </HistoryContent>
            <HistoryInformation show={isInformationVisible.toString()}>
                {/* <strong>Descripción:</strong> */}
                <p>{ data.description ? data.description : 'Sin descripción' }</p>
                <HistoryActions>
                    {/* <Button label='Edit' size='small'/> */}
                    <Button label='Delete' variant='danger' size='small'onClick={handleDeleteMovement}/>
                </HistoryActions>
            </HistoryInformation>
        </HistoryCostContainer>
    );
};