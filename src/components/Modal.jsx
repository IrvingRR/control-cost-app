import { ButtonCloseModal, ModalContainer } from "../styled/components/modal.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * @param {Any} children: Is the content which will be displayed inside of the modal component
 * @param {Boolean} isModalOpen: Is the property which indicates if the modal must be displayed or not
 * @param {Function} handleCloseModal: Is the function which allows us to close the modal component 
 */

export const Modal = ({ children, isModalOpen, handleCloseModal }) => {
  return (
    <ModalContainer open={isModalOpen}>
        <ButtonCloseModal onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes}/>
        </ButtonCloseModal>
        {children}
    </ModalContainer>
  );
};