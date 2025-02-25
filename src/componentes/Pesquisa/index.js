import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import iconFavoritar from "../../imagens/favoritar.png";
import iconDesfavoritar from "../../imagens/desfavoritar.png";

import Fuse from "fuse.js";
import { getLivros } from "../../servicos/livros";
import {
  getFavoritos,
  postFavorito,
  deleteFavorito,
} from "../../servicos/favoritos";

const Icone = styled.img`
  width: 32px;
  height: 32px;
`;

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
  padding: 12px 0px;
  &:hover {
    border: 1px solid white;
  }
`;

const Nome = styled.p`
  width: 200px;
`;

const Capa = styled.img`
  width: 100px;
`;

function Pesquisa() {
  const [pesquisa, setPesquisa] = useState([]);
  const [livros, setLivros] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const livrosDaApi = await getLivros();
        const favoritosDaApi = await getFavoritos();

        setLivros(livrosDaApi);
        setFavoritos(favoritosDaApi);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  const fuse = new Fuse(livros, {
    keys: ["titulo"],
    threshold: 0.3,
    ignoreLocation: true,
    includeScore: true,
  });

  async function toggleFavorito(id) {
    try {
      if (favoritos.some((fav) => fav.id === id)) {
        await deleteFavorito(id);
      } else {
        await postFavorito(id);
      }
      const favoritosAtualizados = await getFavoritos();
      setFavoritos(favoritosAtualizados);
    } catch (error) {
      console.error("Erro ao atualizar favoritos:", error);
    }
  }

  function handlePesquisa(evento) {
    const textoDigitado = evento.target.value.trim().toLowerCase();
    if (textoDigitado === "") {
      setPesquisa([]);
      return;
    }
    const resultadoPesquisa = fuse
      .search(textoDigitado)
      .map((result) => result.item);
    setPesquisa(resultadoPesquisa);
  }

  return (
    <PesquisaCtn>
      <Titulo>O que deseja ler hoje?</Titulo>
      <Subtitulo>Fique à vontade para se aventurar nos livros</Subtitulo>
      <Input
        placeholder="Digite título do livro..."
        onChange={handlePesquisa}
      />
      {pesquisa.length > 0 ? (
        pesquisa.map((livro) => (
          <Resultado key={livro.id}>
            <Capa src={livro.src} alt={livro.titulo} />
            <Nome>{livro.titulo}</Nome>
            <Icone
              onClick={() => toggleFavorito(livro.id)}
              src={
                favoritos.some((fav) => fav.id === livro.id)
                  ? iconFavoritar
                  : iconDesfavoritar
              }
              alt="Ícone de favoritar"
            />
          </Resultado>
        ))
      ) : (
        <p>Nenhum resultado encontrado</p>
      )}
    </PesquisaCtn>
  );
}

export default Pesquisa;
