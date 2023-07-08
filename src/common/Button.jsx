import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonElement } from '../styled/common/button.styles';

/** This is a reusable button component
 * 
 * @param {String} label: Is the text which will be displayed in the button
 * @param {Element} icon: Is the icon element which will be dispayerd inside button
 * @param {String} variant: Is the property which indicates the appearance of the button
 * @param {String} size: Is the property which indicated the size of the button 
 * @returns 
 */

export const Button = ({ label, icon, variant, size, ...props }) => {
  return (
    <ButtonElement variant={variant} { ...props } size={size}>
      { icon && <FontAwesomeIcon icon={icon} /> }
      {label}
    </ButtonElement>
  );
};