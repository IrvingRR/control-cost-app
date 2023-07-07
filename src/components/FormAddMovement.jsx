import { Form, FormActions, Select, Field, Label } from "../styled/common/form.styles";
import { Button, TextArea } from '../common';
import { Input } from "../common";
import { useForm } from "../hooks";

export const FormAddMovement = ({ handleCloseModal }) => {

  const initialValues = {
    title: {  value: null, required: true },
    amount: {  value: 0, required: true },
    date: {  value: null, required: true },
    description: {  value: null, required: false },
    category: {  value: null, required: true },
    type: {  value: null, required: true },
  };

  const successFunction = () => {
    console.log("All its ok", form);
  };

  const { form, handleChange, handleSubmit } = useForm(initialValues, successFunction);

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Agregar movimiento</h2>
        <Input type='text' name='title' label='Título:' onChange={handleChange} value={ form.title.value }/>
        <Input type="number" name='amount' label='Cantidad:' onChange={handleChange} value={ form.amount.value }/>
        <Input type='date' name='date' label="Fecha:" onChange={handleChange} value={ form.date.value }/>
        <TextArea name='description' label='Descripción:' onChange={handleChange} value={ form.description.value }/>
        
        <Field>
          <Label>Categoría:</Label>
          <Select name='category' onChange={handleChange} value={ form.category.value }>
          <option selected disabled>Selecciona categoría</option>
          <option value='common'>Gasto común</option>
          <option value='transaction'>Transacción</option>
          <option value='pay'>Pago</option>
        </Select>
        </Field>

        <Field>
          <Label>Tipo de movimiento:</Label>
          <Select name='type' onChange={handleChange} value={ form.type.value }>
            <option selected disabled>Selecciona tipo de movimiento</option>
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