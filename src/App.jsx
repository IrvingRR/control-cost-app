import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from "./styled/globalStyles";
import { Balance, FormAddMovement, History, Modal, MonthFilter } from "./components";
import { Container, Content } from "./styled/common/main.styles";
import { Button, Loader } from './common';
import { useModal } from './hooks';
import { MainProvider } from "./contexts/MainContext";

const toasterOptions = {
  style: {
    fontSize: 'var(--fs-s)'
  },
}

function App() {
 
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <MainProvider>
      <GlobalStyle/>
        <Toaster toasterOptions={toasterOptions}/>
        <Container>
          <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
            <FormAddMovement handleCloseModal={handleCloseModal}/>
          </Modal>
          <MonthFilter/>
          <Content>
            <Loader/>
            <Balance/>
            <History/>
          </Content>
          <Button className='button-container' label='Agregar Movimiento' onClick={handleOpenModal}/>
        </Container>
    </MainProvider>
  )
}

export default App;