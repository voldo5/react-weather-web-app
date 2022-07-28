import React, { useState } from "react";
//import React, { useState, useRef, createRef } from "react";
import { AppContainer } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { NewItemForm } from "./components/NewItemForm";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";
import { CardSize } from "./interfaces/interface";
import { CARD_SIZE } from "./state/data";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { 
  getFirestore,
  query,
  orderBy,
  onSnapshot,
  collection,
  getDoc, 
  getDocs, 
  addDoc,
  updateDoc,
  doc, 
  serverTimestamp, 
  arrayUnion
} from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);

export const App = () => {
  const { tasks, dispatch } = useAppState();
  //const ref = useRef(createRef<HTMLButtonElement>());
  const [cardSize, setCardSize] = useState<CardSize>(CARD_SIZE); 

  let newItemFormId: string = tasks ? (tasks.length + 1).toString() : "0";

  return (
    <AppContainer>
      {tasks.map((task, index) => (
        <WeatherCard
          text={task.text}
          id={task.idTask}
          key={task.idTask}
          cardSize={cardSize}
          setCardSize={setCardSize}
        />
      ))}

      <NewItemForm
        id={newItemFormId}
        onAdd={(text) => dispatch(addTask(text, newItemFormId))}
        cardSize={cardSize}
      ></NewItemForm>
    </AppContainer>
  );
};

export default App;
