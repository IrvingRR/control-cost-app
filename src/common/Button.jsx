// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonElement } from '../styled/common/button.styles';

export const Button = ({ label, icon, variant, ...props }) => {
  return (
    <ButtonElement variant={variant} { ...props }>
      {/* { icon && <FontAwesomeIcon icon={icon} /> } */}
      {label}
    </ButtonElement>
  );
};