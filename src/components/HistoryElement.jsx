import { HistoryElementContainer } from "../styled/components/historyElement.styles";
import { HistoryCost } from "./HistoryCost";

export const HistoryElement = ({ data }) => {
  return (
    <HistoryElementContainer>
        {/* <strong>Hoy - 7 Jul</strong> */}
        <strong>{ data.date }</strong>
        { 
          data.movements.map(movement => <HistoryCost key={movement.id} data={movement}/>)
        }
    </HistoryElementContainer>
  );
};