import { Link } from "react-router-dom";
import logo from "../../imagens/logo.png";
import styled from "styled-components";

const LogoCtn = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 140px;
  height: 140px;
`;

function Logo() {
  return (
    <LogoCtn>
      <Link to={"/"}>
        <LogoImg src={logo} alt="Logo do site isBook" className="logo-img" />
      </Link>
    </LogoCtn>
  );
}

export default Logo;
