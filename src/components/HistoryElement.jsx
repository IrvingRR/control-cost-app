import { HistoryElementContainer } from "../styled/components/historyElement.styles";
import { HistoryCost } from "./HistoryCost";
import { formatDateHelper } from "../helpers";

/**
 * 
 * @param {Object} data: Is the information which will be displayed in the component 
 */

export const HistoryElement = ({ data }) => {

  // Get the date with the correct format
  const formattedDate = formatDateHelper(data.date);

  return (
    <HistoryElementContainer>
        <h4>{formattedDate}</h4>
        { 
          data.movements.map(movement => <HistoryCost key={movement.id} data={movement}/>)
        }
    </HistoryElementContainer>
  );
};