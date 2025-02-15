import styled from "styled-components";

export const Titulo = styled.h2`
  width: 100%;
  padding: ${props => props.largura || '30px 0'};
  background: ${props => props.fundo || 'rgb(247, 247, 247)'};
  color: ${props => props.cor || '#000'};
  font-size: ${props => props.tamanho || '20px'};
  text-align: center;
  margin: 0;
`;