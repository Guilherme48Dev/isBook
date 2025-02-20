import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos } from "../servicos/favoritos";

const AppCtn = styled.div`
  width: auto;
  height: auto;
  background: linear-gradient(to right, #fbc2eb 35%, #a6c1ee);
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fatchFavorito() {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
  }

  useEffect(() => {
    fatchFavorito()
  }, [])

  return (
    <AppCtn>
      {favoritos.map(favorito => (
        <p>{favorito.titulo}</p>
      ))}
    </AppCtn>
  );
}

export default Favoritos;
