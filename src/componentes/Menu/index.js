import styled from "styled-components";

const MenuCtn = styled.nav`
  background-color: rgb(252, 248, 244);
  display: flex;
  justify-content: center;
  margin-bottom: 180px;
  p:hover {
    background: linear-gradient(90deg, #a3107a 35%, #995aec);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Opcoes = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;

const textOpcoes = ["Categorias", "Favoritos", "Minha estante"];

function Menu() {
  return (
    <MenuCtn>
      <Opcoes>
        {textOpcoes.map((texto) => (
          <Opcao>
            <p>{texto}</p>
          </Opcao>
        ))}
      </Opcoes>
    </MenuCtn>
  );
}

export default Menu;
