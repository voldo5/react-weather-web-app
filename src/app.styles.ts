import styled from "styled-components";

//height: 100%;
//display: flex;
//flex: 1 1 0px;
//   flex: 1 1 auto;
//   flex-direction: row;
//flex-wrap: wrap;
// align-content: flex-start;
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

// justify-content: flex-start;
//   align-items: flex-start;
//   align-content: flex-start;

// export const AppContainer = styled.div`
//   width: max(100vw, 586px);
//   height: calc(0.625 * max(100vw, 586px));
//   border: 2px solid red;
//   display: grid;
//   grid-template:
//     "area-0 area-1 area-2" 1fr
//     "area-3 area-4 area-5" 1fr
//     "area-6 area-7 area-8" 1fr
//     / 1fr 1fr 1fr;
//   grid-gap: 2px;
//   background: var(--color-green0);
//   justify-items: stretch;
//   align-items: stretch;
//   justify-content: center;
// `;
