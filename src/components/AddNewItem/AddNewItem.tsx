import React, { useState } from "react";
import { NewItemForm } from "../NewItemForm/NewItemForm";
import * as S from "./AddNewItem.styles";
import { AddNewItemProps } from "./AddNewItem.props";

//todo remove
export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <div></div>
      //   <NewItemForm
      //     onAdd={(text) => {
      //       onAdd(text);
      //       setShowForm(false);
      //     }}
      //   />
    );
  }

  return (
    <S.AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </S.AddItemButton>
  );
};
