import { HistoryContainer } from "../styled/components/history.styles";
import { HistoryElement } from './HistoryElement';

export const History = () => {
  return (
    <HistoryContainer>
        <HistoryElement/>
        <HistoryElement/>
        <HistoryElement/>
    </HistoryContainer>
  );
};