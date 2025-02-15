import styled from "styled-components";

const RodapeCtn = styled.footer`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Desenvolvedor = styled.h4`
  margin: 1px;
`;

const Site = styled.p`
  margin: 1px;
`;

function Rodape() {
  return (
    <RodapeCtn>
      <Site>isBook site para estudos pessoais</Site>
      <Desenvolvedor>Desenvolvido por Guilherme Jesus</Desenvolvedor>
    </RodapeCtn>
  );
}

export default Rodape;
