import styled from "styled-components";

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

// max-width: 320px;
//   min-width: 192px;
//   max-height: 200px;
//   justify-self: center;
//   align-self: stretch;
//   flex-grow: 1;
//   flex-shrink: 1;
