import styled from "styled-components";
import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Pesquisa from "./componentes/Pesquisa";

const AppCtn = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #fbc2eb 35%, #a6c1ee);
`;

function App() {
  return (
    <AppCtn>
      <Header />
      <Menu />
      <Pesquisa />
    </AppCtn>
  );
}

export default App;
