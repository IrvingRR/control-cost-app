import { useContext } from "react";
import { HistoryContainer } from "../styled/components/history.styles";
import { MainContext } from "../contexts/MainContext";
import { orderMovementsHelper } from '../helpers';
import { HistoryElement } from './HistoryElement';

export const History = () => {

  const { movements } = useContext(MainContext);
  const movementsOrdered = orderMovementsHelper(movements);

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