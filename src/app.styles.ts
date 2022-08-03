import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  padding: 16px;
  width: 100%;

  justify-content: center;
  border: solid 2px red;
  
  align-content: center;

  
`;
//height: 100vh;
// align-content: flex-start;

export const CardPlaceholder = styled.div`
  width: 220px;
  height: 2px;
  margin: 5px;
  background-color: red;

  flex-basis: 220px;
  flex-grow: 1;
  max-width: 320px;
`;
