import { Form, FormActions, Select, Field, Label } from "../styled/common/form.styles";
import { Button, TextArea } from '../common';
import { Input } from "../common";
import { useForm } from "../hooks";
import { getMonthHelper, prepareDataHelper } from "../helpers";

export const FormAddMovement = ({ handleCloseModal }) => {

  const initialValues = {
    title: {  value: null, required: true },
    amount: {  value: null, required: true },
    date: {  value: null, required: true },
    description: {  value: null, required: false },
    category: {  value: null, required: true },
    type: {  value: null, required: true },
  };

  const successFunction = (e) => {

    const data = prepareDataHelper(form);
    data.month = getMonthHelper(data.date);
    // handleReset(e);
  };

  const { form, handleChange, handleSubmit, handleReset } = useForm(initialValues, successFunction);

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Agregar movimiento</h2>
        <Input type='text' name='title' label='Título:' onChange={handleChange} placeholder='Ejemplo: Pago de curso'/>
        <Input type="number" name='amount' label='Cantidad:' onChange={handleChange} placeholder='0.00'/>
        <Input type='date' name='date' label="Fecha:" onChange={handleChange}/>
        <TextArea name='description' label='Descripción:' onChange={handleChange} placeholder='Breve descripción'/>
        
        <Field>
          <Label>Categoría:</Label>
          <Select name='category' onChange={handleChange} defaultValue=''>
          <option selected value='' disabled>Selecciona categoría</option>
          <option value='common'>Gasto común</option>
          <option value='transaction'>Transacción</option>
          <option value='pay'>Pago</option>
        </Select>
        </Field>

        <Field>
          <Label>Tipo de movimiento:</Label>
          <Select name='type' onChange={handleChange} defaultValue=''>
            <option selected value='' disabled>Selecciona tipo de movimiento</option>
            <option value='income'>Ingreso</option>
            <option value='spent'>Gasto</option>
          </Select>
        </Field>
        <FormActions>
            <Button label='Agregar'/>
            <Button label='Cancelar' type='button' variant='danger' onClick={handleCloseModal}/>
        </FormActions>
    </Form>
  );
};