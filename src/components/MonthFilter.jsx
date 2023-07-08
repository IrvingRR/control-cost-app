import { useContext } from 'react';
import { MonthsContainer, MonthElement } from "../styled/components/monthFilter.styles";
import { MainContext } from '../contexts/MainContext';

/**
 * This component is responsible for display the header with every month to filter the movements
 * depending of the month
 */

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const MonthFilter = () => {

  const { filterMovementsByMonth, filter } = useContext(MainContext);

  // This function is responsible for change the value of the filter
  const handleSelectMonth = (month) => { 
    filterMovementsByMonth(month);
  };

  return (
    <MonthsContainer>
      { months.map((month, index) => (
        <MonthElement onClick={ () => handleSelectMonth(month) } key={`${month}-${index}`} selected={ filter === month }>{ month }</MonthElement>
      )) }
    </MonthsContainer>
  );
};