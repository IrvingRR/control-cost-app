import { Button } from "./common/Button";
import { MonthFilter } from "./components";
import { Container, Content } from "./styled/common/main.styles";
import { GlobalStyle } from "./styled/globalStyles";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Container>
        <MonthFilter/>
        <Content>
          <h2>Balance content</h2>
        </Content>
      </Container>
    </>
  )
}

export default App;