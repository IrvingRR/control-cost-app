import { Field, FieldContent, InputElement, Legend, Label } from '../styled/common/input.styles';

export const Input = ({ legend, label, isValid, ...props }) => {
  return (
    <Field>
        { label && <Label>{ label }</Label> }
        <FieldContent>
            <InputElement { ...props } autoComplete='off'/>
        </FieldContent>
        { legend && <Legend isValid={isValid}>{ legend }</Legend> }
    </Field>
  );
};