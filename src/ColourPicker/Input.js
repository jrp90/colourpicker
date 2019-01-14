import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 25px;
  border: 3px solid grey;
  border: 3px solid ${props => props.value};
  max-width: 400px;
  padding: 0 15px;
  margin: 10px 0 15px;
`;

export default Input;
