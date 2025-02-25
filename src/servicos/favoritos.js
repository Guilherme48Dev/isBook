import axios from "axios";

const FavoritosAPI = axios.create({
  baseURL: "http://localhost:8000/favoritos",
});

async function getFavoritos() {
  const response = await FavoritosAPI.get("/");

  return response.data;
}

async function postFavorito(id) {
  await FavoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
  await FavoritosAPI.delete(`/${id}`)
}

export { getFavoritos,postFavorito,deleteFavorito };
