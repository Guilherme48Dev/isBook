import styled from "styled-components";
import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Pesquisa from "./componentes/Pesquisa";
import Lancamentos from "./componentes/Lancamentos";
import CardRecomendacao from "./componentes/CardRecomendacao";
import Rodape from "./componentes/Rodape";


const AppCtn = styled.div`
  width: auto;
  height: auto;
  background: linear-gradient(to right, #fbc2eb 35%, #a6c1ee);
`;

function App() {
  return (
    <AppCtn>
      <Header />
      <Menu />
      <Pesquisa />
      <Lancamentos />
      <CardRecomendacao
        titulo="Confira também"
        subtitulo="A revolução dos bichos: Um conto de fadas"
        descricao="Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista."
        imagem={"https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg"}
      />
      <Rodape/>
    </AppCtn>
  );
}

export default App;
