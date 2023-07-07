import { useContext } from "react";
import { HistoryContainer } from "../styled/components/history.styles";
import { MainContext } from "../contexts/MainContext";
import { orderMovements } from '../helpers/orderMovements';
import { HistoryElement } from './HistoryElement';

export const History = () => {

  const { movements } = useContext(MainContext);
  const movementsOrdered = orderMovements(movements);

  return (
    <>
      <HistoryContainer>
        { 
          movementsOrdered.map(movement => <HistoryElement key={movement.date} data={movement}/>)
        }
      </HistoryContainer>
    </>
  );
};