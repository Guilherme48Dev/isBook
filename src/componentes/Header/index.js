import Icones from "../Icones";
import Logo from "../Logo";
import styled from "styled-components";

const CtnHeader = styled.header`
  background-color: white;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

function Header() {
  return (
    <CtnHeader>
      <Logo />
      <Icones />
    </CtnHeader>
  );
}

export default Header;
