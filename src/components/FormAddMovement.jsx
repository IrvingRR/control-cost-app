import { Form, FormActions } from "../styled/common/form.styles";
import { Button, TextArea } from '../common';
import { Input } from "../common";

export const FormAddMovement = ({ handleCloseModal }) => {
  return (
    <Form>
        <h2>Agregar movimiento</h2>
        <Input type='text' name='title' placeholder='Ejemplo: Pago de alquiler' label='Título:'/>
        <Input type='number' name='amount' placeholder='0.00' label='Cantidad:'/>
        <TextArea name='description' placeholder='Escribe una pequeña descripción' label="Descripción:"/>
        <FormActions>
            <Button label='Agregar'/>
            <Button label='Cancelar' type='button' variant='danger' onClick={handleCloseModal}/>
        </FormActions>
    </Form>
  );
};