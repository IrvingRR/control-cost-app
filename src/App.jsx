import { GlobalStyle } from "./styled/globalStyles";
import { Balance, FormAddMovement, History, Modal, MonthFilter } from "./components";
import { Container, Content } from "./styled/common/main.styles";
import { Button } from './common';
import { useModal } from './hooks';

function App() {
 
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
    <GlobalStyle/>
      <Container>
        <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
          <FormAddMovement/>
        </Modal>
        <MonthFilter/>
        <Content>
          <Balance/>
          <History/>
        </Content>
        <Button className='button-container' label='Agregar Movimiento' onClick={handleOpenModal}/>
      </Container>
    </>
  )
}

export default App;