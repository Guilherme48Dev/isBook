import "./Menu.css";

const textOpcoes = ["Categorias", "Favoritos", "Minha estante"];

function Menu() {
  return (
    <nav>
      <ul className="opcoes">
        {textOpcoes.map((texto) => (
          <li className="opcao">
            <p>{texto}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
