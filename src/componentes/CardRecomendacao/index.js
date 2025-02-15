import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  display: flex;
  height: auto;
  margin: 0px auto 180px auto;
  max-width: 800px;
  padding: 24px 4px;
  justify-content: space-evenly;
  width: 100%;
  text-align: center;
  align-items: center;
`;

const Botao = styled.button`
  background: #fff;
  color: #000;
  padding: 10px 0px;
  border-radius: 16px;
  font-size: 16px;
  border: solid 1px #000;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  margin-top: 10px;
  
  &:hover {
    cursor: pointer;
    background:rgb(162, 188, 233, 0.4);
  }
`;

const Descricao = styled.p`
  max-width: 400px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
`;

const ImgLivro = styled.img`
  width: 150px;
`;

const Escritas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CardRecomendacao({ titulo, subtitulo, descricao, imagem }) {
  return (
    <Card>
      <Escritas>
        <Titulo cor="#a6c1ee" tamanho="28px" fundo="#fff" largura="0px 0px 30px 0px">
          {titulo}
        </Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </Escritas>
      <div>
        <ImgLivro src={imagem}></ImgLivro>
        <Botao>Saiba mais...</Botao>
      </div>
    </Card>
  );
}

export default CardRecomendacao;
