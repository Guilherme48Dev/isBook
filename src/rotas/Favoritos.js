import styled from "styled-components";
import Pesquisa from "../componentes/Pesquisa";

const AppCtn = styled.div`
  width: auto;
  height: auto;
  background: linear-gradient(to right, #fbc2eb 35%, #a6c1ee);
`;

function Favoritos() {
  return (
    <AppCtn>
      <Pesquisa />
    </AppCtn>
  );
}

export default Favoritos;
