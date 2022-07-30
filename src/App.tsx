import { useState } from "react";
import { AppContainer } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { NewItemForm } from "./components/NewItemForm";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";
import { CardSize } from "./interfaces/interface";
import { CARD_SIZE } from "./state/data";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { getFirestore } from "firebase/firestore";

export const appFirestoreBackend = initializeApp(firebaseConfig);
export const appFirestoreDb = getFirestore(appFirestoreBackend);

export const App = () => {
  const { tasks, dispatch, defaultRequestDelay } = useAppState();
  const [cardSize, setCardSize] = useState<CardSize>(CARD_SIZE); 

  let newItemFormId: string = tasks ? (tasks.length + 1).toString() : "0";
  let timezoneDbRequestDelay = -defaultRequestDelay; 

  return (
    <AppContainer>
      {/* {tasks.map((task, index) => ( */}
      {tasks.map((task) => (
        <WeatherCard
          text={task.text}
          id={task.idTask}
          key={task.idTask}
          cardSize={cardSize}
          setCardSize={setCardSize}          
          delay = {timezoneDbRequestDelay = timezoneDbRequestDelay + defaultRequestDelay}
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
