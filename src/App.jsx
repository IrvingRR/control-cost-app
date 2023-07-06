import { GlobalStyle } from "./styled/globalStyles";
import { Balance, History, Modal, MonthFilter } from "./components";
import { Container, Content } from "./styled/common/main.styles";
import { Button } from './common';

function App() {

  return (
    <>
    <GlobalStyle/>
      <Container>
        <Modal>
          <h2>Form agregar movimiento</h2>
        </Modal>
        <MonthFilter/>
        <Content>
          <Balance/>
          <History/>
        </Content>
        <Button className='button-container' label='Agregar Movimiento'/>
      </Container>
    </>
  )
}

export default App;