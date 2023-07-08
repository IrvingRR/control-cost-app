import { HistoryElementContainer } from "../styled/components/historyElement.styles";
import { HistoryCost } from "./HistoryCost";
import { formatDateHelper } from "../helpers";

export const HistoryElement = ({ data }) => {

  const formattedDate = formatDateHelper(data.date);

  return (
    <HistoryElementContainer>
        <strong>{formattedDate}</strong>
        {/* <strong>{ data.date }</strong> */}
        { 
          data.movements.map(movement => <HistoryCost key={movement.id} data={movement}/>)
        }
    </HistoryElementContainer>
  );
};