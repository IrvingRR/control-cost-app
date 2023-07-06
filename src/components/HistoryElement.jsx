import { HistoryElementContainer } from "../styled/components/historyElement.styles";
import { HistoryCost } from "./HistoryCost";

export const HistoryElement = () => {
  return (
    <HistoryElementContainer>
        <strong>Hoy - 7 Jul</strong>
        <HistoryCost/>
        <HistoryCost/>
        <HistoryCost/>
    </HistoryElementContainer>
  );
};