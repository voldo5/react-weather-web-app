import { useState, useEffect, ComponentType } from "react";
import { AppState } from "./state/appStateReducer";
import { load } from "./api";
import { defaultState } from "./state/data";
import {
  doc,
  getDoc,  
  DocumentReference,
  DocumentData,
  DocumentSnapshot
} from 'firebase/firestore';
import { appFirestoreDb } from "./App";

type InjectedProps = {
  initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
  return (props: PropsWithoutInjected<TProps>) => {

    const [initialState, setInitialState] = useState<AppState>(defaultState);
    //const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();  

    useEffect(() => {
      const docRef: DocumentReference<DocumentData> = doc(
        appFirestoreDb,
        "states",
        "state"
      );

      const getDocAsync = async (docRef: DocumentReference<DocumentData>) => {
        try {
          const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);          
          if (docSnap.exists()) {
            const state: AppState = JSON.parse(docSnap.data().text);
            setInitialState(state);            
          } else {            
            console.log("Default initial state!");
          }
        } catch (e: any) {
          setError(e);
        }
        setIsLoading(false);
      };
      getDocAsync(docRef);
    }, []); 
    
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    //todo uncomment if using backend to store state 
    // useEffect(() => {
    //   const fetchInitialState = async () => {
    //     try {
    //       const data = await load();
    //       data.tasks.length > 0
    //         ? setInitialState(data)
    //         : setInitialState(initialState);
    //     } catch (e) {
    //       setInitialState(initialState);          
    //     }
    //     setIsLoading(false);
    //   };

    //   fetchInitialState();
    // }, []);

    // ...
    // if (isLoading) {
    //   return <div>Loading</div>;
    // }
    // if (error) {
    //   return <div>{error.message}</div>;
    // }

    console.log("withInitialState initialState: ", initialState);   

    return <WrappedComponent {...props} initialState={initialState} />;
  };
}
