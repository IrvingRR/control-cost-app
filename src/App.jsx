import { Button } from "./common/Button";
import { Balance, MonthFilter } from "./components";
import { Container, Content } from "./styled/common/main.styles";
import { GlobalStyle } from "./styled/globalStyles";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Container>
        <MonthFilter/>
        <Content>
          <Balance/>
        </Content>
      </Container>
    </>
  )
}

export default App;