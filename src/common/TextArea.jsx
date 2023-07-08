import { TextAreaElement, Field, Label } from '../styled/common/form.styles';

/**
 * This is a reusable TextArea element to display in a form dynamically
 * @param {String} label: Is the text which will be displayed in a label tag to indicate the name field 
 */

export const TextArea = ({ label, ...props }) => {
  return (
    <Field>
        { label && <Label>{ label }</Label>}
        <TextAreaElement { ...props }/>
    </Field>
  );
};
