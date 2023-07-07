import { GlobalStyle } from "./styled/globalStyles";
import { Balance, FormAddMovement, History, Modal, MonthFilter } from "./components";
import { Container, Content } from "./styled/common/main.styles";
import { Button } from './common';
import { useModal } from './hooks';
import { MainProvider } from "./contexts/MainContext";

function App() {
 
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <MainProvider>
      <GlobalStyle/>
        <Container>
          <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
            <FormAddMovement handleCloseModal={handleCloseModal}/>
          </Modal>
          <MonthFilter/>
          <Content>
            <Balance/>
            <History/>
          </Content>
          <Button className='button-container' label='Agregar Movimiento' onClick={handleOpenModal}/>
        </Container>
    </MainProvider>
  )
}

export default App;