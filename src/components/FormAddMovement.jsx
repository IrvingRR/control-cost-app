import { Form, FormActions, Select, Field, Label } from "../styled/common/form.styles";
import { Button, TextArea } from '../common';
import { Input } from "../common";

export const FormAddMovement = ({ handleCloseModal }) => {
  return (
    <Form>
        <h2>Agregar movimiento</h2>
        <Input type='text' name='title' label='Título:'/>
        <Input type='number' name='amount' label='Cantidad:'/>
        <Input type='date' name='date' label="Fecha:"/>
        <TextArea name='description' label='Descripción:'/>
        
        <Field>
          <Label>Categoría:</Label>
          <Select name='category'>
          <option disabled>Selecciona categoría</option>
          <option value='common'>Gasto común</option>
          <option value='transaction'>Transacción</option>
          <option value='pay'>Pago</option>
        </Select>
        </Field>

        <Field>
          <Label>Tipo de movimiento:</Label>
          <Select name='type'>
            <option disabled>Selecciona tipo de movimiento</option>
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