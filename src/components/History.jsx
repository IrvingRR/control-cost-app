import { useContext } from "react";
import { HistoryContainer, HistoryMessage } from "../styled/components/history.styles";
import { MainContext } from "../contexts/MainContext";
import { orderMovementsHelper } from '../helpers';
import { HistoryElement } from './HistoryElement';

export const History = () => {

  const { movements, filter } = useContext(MainContext);
  const movementsOrdered = orderMovementsHelper(movements);

  return (
    <>
      <HistoryContainer>
        { 
          movementsOrdered.map(movement => <HistoryElement key={movement.date} data={movement}/>)
        }

        { movementsOrdered.length === 0 && <HistoryMessage>No hay movimientos en <span>{filter}</span></HistoryMessage>}
      </HistoryContainer>
    </>
  );
};