import { useContext } from "react";
import { Form, FormActions, Select } from "../styled/common/form.styles";
import { Button, TextArea } from '../common';
import { Input } from "../common";
import { useForm } from "../hooks";
import { getMonthHelper, prepareDataHelper } from "../helpers";
import { MainContext } from "../contexts/MainContext";
import { createMovementService } from '../services/movements';

/**
 * This component is responsible to handle the information when the user wanna to add a new movement
 * @param {Function} handleCloseModal: This function allows to close the modal component 
 */

export const FormAddMovement = ({ handleCloseModal }) => {

  const { createMovement, filterMovementsByMonth, startLoading, stopLoading } = useContext(MainContext);

  const initialValues = {
    title: {  value: null, required: true },
    amount: {  value: null, required: true },
    date: {  value: null, required: true },
    description: {  value: null, required: false },
    category: {  value: null, required: true },
    type: {  value: null, required: true },
  };

  // This function is responsible for send a http request with the data of the new movement
  const successFunction = async (e) => {

    startLoading();
    const data = prepareDataHelper(form);
    data.month = getMonthHelper(data.date);

    const newMovement = await createMovementService(data);
    createMovement(newMovement);
    filterMovementsByMonth(data.month);
    
    handleCloseModal();
    handleReset(e);
    stopLoading()

  };

  // Get all values and functions from useForm hook
  const { form, handleChange, handleSubmit, handleReset } = useForm(initialValues, successFunction);

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Agregar movimiento</h2>
        <Input type='text' name='title' onChange={handleChange} placeholder='Ejemplo: Pago de curso'/>
        <Input type="number" name='amount' onChange={handleChange} placeholder='0.00'/>
        <Input type='date' name='date' onChange={handleChange}/>
        <TextArea name='description' onChange={handleChange} placeholder='Breve descripción'/>
        
        <Select name='category' onChange={handleChange} defaultValue=''>
          <option selected value='' disabled>Selecciona categoría</option>
          <option value='common'>Gasto común</option>
          <option value='transaction'>Transacción</option>
          <option value='pay'>Pago</option>
        </Select>

        <Select name='type' onChange={handleChange} defaultValue=''>
          <option selected value='' disabled>Selecciona tipo de movimiento</option>
          <option value='income'>Ingreso</option>
          <option value='spent'>Gasto</option>
        </Select>

        <FormActions>
            <Button label='Agregar'/>
            <Button label='Cancelar' type='button' variant='danger' onClick={handleCloseModal}/>
        </FormActions>
    </Form>
  );
};