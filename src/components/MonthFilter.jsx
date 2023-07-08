import { useContext } from 'react';
import { MonthsContainer, MonthElement } from "../styled/components/monthFilter.styles";
import { MainContext } from '../contexts/MainContext';

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const MonthFilter = () => {

  const { filterMovementsByMonth, filter } = useContext(MainContext);

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