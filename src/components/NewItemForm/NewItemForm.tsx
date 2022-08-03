import React, { useState } from "react";
import { useFocus } from "../../utils/useFocus";
import { NewItemFormProps } from "./NewItemForm.props";
import * as S from "./newItemForm.styles";
import { Header } from "../Header/Header";


export const NewItemForm = (props: NewItemFormProps): JSX.Element => {
  const [text, setText] = useState("");
  //const [showForm, setShowForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const inputRef = useFocus();

  const { cardSize, onAdd } = props;

  const handleAddText = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <S.NewItemFormContainer
      width={cardSize.width}
      height={cardSize.height}
    >
      <Header/>
      <S.NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <S.NewItemButton
        onClick={() => {
          onAdd(text);
          setShowForm(true);
        }}
      >
        Add New Place
      </S.NewItemButton>
    </S.NewItemFormContainer>
  );
};
