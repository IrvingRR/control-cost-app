import { ButtonCloseModal, ModalContainer } from "../styled/components/modal.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ children }) => {
  return (
    <ModalContainer isModalVisible={false}>
        <ButtonCloseModal>
            <FontAwesomeIcon icon={faTimes}/>
        </ButtonCloseModal>
        {children}
    </ModalContainer>
  );
};