import { MonthsContainer, MonthElement } from "../styled/components/monthFilter.styles";
import { useState } from 'react';

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const MonthFilter = () => {

  const [monthSelected, setMonthSelected] = useState('Marzo');

  const handleSelectMonth = (mount) => { setMonthSelected(mount) };

  return (
    <MonthsContainer>
      { months.map((month, index) => (
        <MonthElement onClick={ () => handleSelectMonth(month) } key={`${month}-${index}`} selected={ monthSelected === month }>{ month }</MonthElement>
      )) }
    </MonthsContainer>
  );
};