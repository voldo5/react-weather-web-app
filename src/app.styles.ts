import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 8px;
  width: 100%;
`;
//height: 100vh;

export const CardPlaceholder = styled.div`
  width: 220px;
  height: 2px;
  margin: 5px;
  background-color: red;

  flex-basis: 220px;
  flex-grow: 1;
  max-width: 320px;
`;
