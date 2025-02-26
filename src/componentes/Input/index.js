import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border: 2px solid #FFF;
  padding: 20px 440px 20px 20px;
  border-radius: 50px;
  width: 200px;
  color: #FFF;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #FFF;
    font-size: 16px;
    text-align: start;
    display: flex;
  }
`;

export default Input;
