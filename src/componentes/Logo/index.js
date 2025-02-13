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
      <LogoImg src={logo} alt="Logo do site isBook" className="logo-img" />
    </LogoCtn>
  );
}

export default Logo;
