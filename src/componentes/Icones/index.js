import Sacola from "../../imagens/sacola.svg";
import Perfil from "../../imagens/perfil.svg";
import styled from "styled-components";

const IconesCtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: auto;
  right: 40px;
`;

const Icons = styled.img`
  margin-right: 24px;
  width: 36px;
`;

function Icones() {
  return (
    <IconesCtn>
      <Icons src={Sacola} alt="compras" />
      <Icons src={Perfil} alt="perfil" />
    </IconesCtn>
  );
}

export default Icones;
