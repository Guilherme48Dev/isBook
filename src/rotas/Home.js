import styled from "styled-components";
import Pesquisa from "../componentes/Pesquisa";
import Lancamentos from "../componentes/Lancamentos";
import CardRecomendacao from "../componentes/CardRecomendacao";

const AppCtn = styled.div`
  width: auto;
  height: auto;
  background: linear-gradient(to right, #fbc2eb 35%, #a6c1ee);
`;

const Espaco = styled.div`
  height : 140px;
`;

function Home() {
  return (
    <AppCtn>
      <Pesquisa />
      <Lancamentos />
      <CardRecomendacao
        titulo="Confira também"
        subtitulo="A revolução dos bichos: Um conto de fadas"
        descricao="Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista."
        imagem={
          "https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg"
        }
      />
      <Espaco />
    </AppCtn>
  );
}

export default Home;
