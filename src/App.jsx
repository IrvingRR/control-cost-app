import { GlobalStyle } from "./styled/globalStyles";
import { Balance, History, Modal, MonthFilter } from "./components";
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
          <h2>Form agregar movimiento</h2>
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