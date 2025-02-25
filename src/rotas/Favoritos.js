import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavorito, getFavoritos } from "../servicos/favoritos";

const AppCtn = styled.div`
  width: auto;
  height: 750px;
  background: linear-gradient(to right, #fbc2eb 35%, #a6c1ee);
`;
const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    margin: 0px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    width: 100%;
    padding: 10px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  margin: 0px;
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;
function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fatchFavorito() {
    const favoritosDaApi = await getFavoritos();
    setFavoritos(favoritosDaApi);
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fatchFavorito();
  }

  useEffect(() => {
    fatchFavorito();
  }, []);

  return (
    <AppCtn>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {favoritos.length !== 0
            ? favoritos.map((favorito) => (
                <Resultado onClick={() => deletarFavorito(favorito.id)}>
                  <img src={favorito.src} />
                  <p>{favorito.titulo}</p>
                </Resultado>
              ))
            : null}
        </ResultadoContainer>
      </div>
    </AppCtn>
  );
}

export default Favoritos;
