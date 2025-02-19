import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";

import Fuse from "fuse.js";
import { getLivros } from "../../servicos/livros";

const PesquisaCtn = styled.section`
  color: #fff;
  text-align: center;
  height: auto;
  width: 100%;
  margin-bottom: 180px;
  padding: 48px 0px;
`;

const Titulo = styled.h2`
  margin: 0px;
  color: #fff;
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
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaApi = await getLivros();
    setLivros(livrosDaApi);
  }

  const fuse = new Fuse(livros, {
    keys: ["titulo"],
    threshold: 0.3,
    ignoreLocation: true,
    includeScore: true,
  });

  return (
    <PesquisaCtn>
      <Titulo>O que deseja ler hoje?</Titulo>
      <Subtitulo>Fique à vontade para se aventurar nos livros</Subtitulo>
      <Input
        placeholder="Digite título do livro..."
        onBlur={(evento) => {
          const textoDigitado = evento.target.value.toLowerCase();
          const resultadoPesquisa = fuse.search(textoDigitado);
          setPesquisa(resultadoPesquisa.map((livro) => livro.item));
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
