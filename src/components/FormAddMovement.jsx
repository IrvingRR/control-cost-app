import { Form, FormActions, TextArea } from "../styled/common/form.styles";
import { Button } from '../common';
import { Input } from "../common";

export const FormAddMovement = () => {
  return (
    <Form>
        <h2>Agregar movimiento</h2>
        <Input type='text' name='title' placeholder='Ejemplo: Pago de alquiler' label='Título:'/>
        <Input type='number' name='amount' placeholder='0.00' label='Cantidad:'/>
        <TextArea name='description' placeholder='Descripción'/>
        <FormActions>
            <Button label='Agregar'/>
            <Button label='Cancelar' variant='danger'/>
        </FormActions>
    </Form>
  );
};