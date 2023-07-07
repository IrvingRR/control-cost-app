import { TextAreaElement, Field, Label } from '../styled/common/form.styles';

export const TextArea = ({ label, ...props }) => {
  return (
    <Field>
        { label && <Label>{ label }</Label>}
        <TextAreaElement { ...props }/>
    </Field>
  );
};
