import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonElement } from '../styled/common/button.styles';

export const Button = ({ label, icon, variant, size, ...props }) => {
  return (
    <ButtonElement variant={variant} { ...props } size={size}>
      { icon && <FontAwesomeIcon icon={icon} /> }
      {label}
    </ButtonElement>
  );
};