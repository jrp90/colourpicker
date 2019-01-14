import styled from 'styled-components';

const SavedColour = styled.div`
  background: ${props => props.colour};
  width: 20px;
  height: 20px;
  border: 1px solid black;
`;

export default SavedColour;
