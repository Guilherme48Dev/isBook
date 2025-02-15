import { Titulo } from "../Titulo";
import { livros } from "./dadosLancamentos";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 148px;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 280px;
    padding: 24px;
  }
`;

const LivrosLancados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

function Lancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#a6c1ee" tamanho="36px">
        CONFIRA OS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <LivrosLancados>
            <img key={livro.id} src={livro.src} />
            <p>{livro.titulo}</p>
          </LivrosLancados>
        ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  );
}

export default Lancamentos;
