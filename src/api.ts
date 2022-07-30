import { AppState } from "./state/appStateReducer";
import {
  getFirestore,
  collection,
  setDoc,  
  doc,  
} from 'firebase/firestore';

export const save = (payload: AppState) => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error while saving the state.");
    }
  });
};

export const load = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(
    (response) => {
      if (response.ok) {
        return response.json() as Promise<AppState>;
      } else {
        throw new Error("Error while loading the state.");
      }
    }
  );
};

export async function saveState(state: AppState) {
  
  const messagesRef = collection(getFirestore(), "states");

  console.log('saveState state = ', state);
  try {
    const item = JSON.stringify(state);
    await setDoc(doc(messagesRef, "state"), { 
      text: item,
  });
    // await addDoc(collection(getFirestore(), 'messages'), {      
    //   text: messageText
    // });
  }
  catch(error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}
