import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { Livros } from "./dados";

const PesquisaCtn = styled.section`
  color: #000;
  text-align: center;
  padding: 84px 0;
  height: 280px;
  width: 100%;
`;
const Titulo = styled.h2`
  margin-top: 24px;
  margin-bottom: 0px;
  color: #000;
  font-size: 48px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 12px 0px 12px 0px;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [pesquisa, setPesquisa] = useState([]);

  return (
    <PesquisaCtn>
      <Titulo>O que deseja ler hoje?</Titulo>
      <Subtitulo>Fique a vontade para se aventurar nos livros</Subtitulo>
      <Input
        placeholder="Digite título do livro"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = Livros.filter((livro) =>
            livro.titulo.includes(textoDigitado)
          );
          setPesquisa(resultadoPesquisa);
        }}
      />
      {pesquisa.map((livro) => (
        <Resultado>
          <img src={livro.src} />
          <p>{livro.titulo}</p>
        </Resultado>
      ))}
    </PesquisaCtn>
  );
}

export default Pesquisa;
