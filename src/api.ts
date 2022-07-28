import { AppState } from "./state/appStateReducer";
//import { appData } from "./state/data";
import { firebase } from "./App";


import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

// import { firebase } from "./App";
//firebase

export const save = (payload: AppState) => {
  //   console.log(
  //     "process.env.REACT_APP_BACKEND_ENDPOINT = ",
  //     process.env.REACT_APP_BACKEND_ENDPOINT
  //   );
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
        //return JSON.stringify(appData);
        //return new Promise<AppState>(appData);
        //return appData as Promise<AppState>;
        throw new Error("Error while loading the state.");
      }
    }
  );
};

// const AppState = {
//   draggedItem: DragItem | null;
//   timeZoneApiDelay: number;
//   tasks: Task[];
// }

export async function saveState(state: AppState) {
  // Add a new message entry to the Firebase database.
  const messagesRef = collection(getFirestore(), "states");
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

//  export async function saveMessage(messageText: AppState) {
//   // Add a new message entry to the Firebase database.
//   const messagesRef = collection(getFirestore(), "messages");
//   try {
//     await setDoc(doc(messagesRef, messageText), {      
//       text: messageText
//     });
//     // await addDoc(collection(getFirestore(), 'messages'), {      
//     //   text: messageText
//     // });
//   }
//   catch(error) {
//     console.error('Error writing new message to Firebase Database', error);
//   }
// }

// Loads chat messages history and listens for upcoming ones.
function loadMessages() {
  // Create the query to load the last 12 messages and listen for new ones.
  const recentMessagesQuery = query(collection(getFirestore(), 'messages'), orderBy('timestamp', 'desc'), limit(12));
  console.log("recentMessagesQuery = ", recentMessagesQuery);
  
  // // Start listening to the query.
  // onSnapshot(recentMessagesQuery, function(snapshot) {
  //   snapshot.docChanges().forEach(function(change) {
  //     if (change.type === 'removed') {
  //       deleteMessage(change.doc.id);
  //     } else {
  //       var message = change.doc.data();
  //       console.log("message.text = ", message.text)
  //       // displayMessage(change.doc.id, message.timestamp, message.name,
  //       //               message.text, message.profilePicUrl, message.imageUrl);
  //     }
  //   });
  // });

}

// export function saveToFirebase(email: string) {
//   var emailObject = {
//       email: email
//   };

//   firebase.database().ref('subscription-entries').push().set(emailObject)
//       .then(function(snapshot) {
//           success(); // some success method
//       }, function(error) {
//           console.log('error' + error);
//           error(); // some error method
//       });
// }  
