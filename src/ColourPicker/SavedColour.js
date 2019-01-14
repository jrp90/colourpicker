import styled from 'styled-components';

const SavedColour = styled.div`
  background: ${props => props.colour};
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

export default SavedColour;
