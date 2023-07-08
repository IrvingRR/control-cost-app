import { Field, FieldContent, InputElement, Legend, Label } from '../styled/common/form.styles';

/**
 * This is a reusable input component
 * @param {String} legen: Is the text which will be displayed under input in case is invalid
 * @param {String} label: Is the label which will be displayed in a label tag to indicate the field
 * @param {Boolean} isValid: Is the property which indicates if the input is valid or not
 * @returns 
 */

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