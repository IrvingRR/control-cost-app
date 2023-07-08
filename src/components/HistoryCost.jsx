import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HistoryCostContainer, HistoryContent, HistoryTitle, HistoryCostSymbol, HistoryCostActions, HistoryCostAmount, HistoryCostButton, HistoryInformation, HistoryActions } from "../styled/components/historyCost.styles";
import { Button } from '../common';
import { MainContext } from '../contexts/MainContext';
import { deleteMovementService } from '../services/movements';

/**
 * This component is responsible for render the information about every movement
 * @param {Object} data: This param get all specific data of the cost to display in the component 
 */

export const HistoryCost = ({ data }) => {

    const { deleteMovement } = useContext(MainContext);
    const [isInformationVisible, setIsInformationVisible] = useState(false);

    // This function allow us to show and hidden the extra information of the movement
    const handleToggleInformation = () => setIsInformationVisible(!isInformationVisible);
    
    // This function is responsible for delete a specific movement and execute tha action deleteMovement
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