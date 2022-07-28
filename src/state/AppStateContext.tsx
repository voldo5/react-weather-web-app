import {
  useState,
  createContext,
  useContext,
  useEffect,
  Dispatch,
} from "react";
import { appStateReducer, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { findItemIndexById } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";
import { AppState } from "../state/appStateReducer";
import { withInitialState } from "../withInitialState";
import { save, saveState } from "../api";
import { appData } from "./data";

type AppStateContextProps = {
  tasks: Task[];
  draggedItem: DragItem | null;
  timeZoneApiDelay: number;
  dispatch: Dispatch<Action>;
  findItemIndexById(items: Task[], id: string): number;
  incrementDelay(msDelay: number): void;
};

type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {

    console.log("AppStateProvider initialState = ", initialState);
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    console.log("AppStateProvider state = ", state);

    //todo uncomment if using backend to store state  
    // useEffect(() => {     
    //   save(state);
    // }, [state]);

     useEffect(() => {
       // saveMessage("test1");
       console.log("saveState111 state = ", state);
       if (state.tasks.length > 0) {
         saveState(state);
         console.log("state.tasks.length = ", state.tasks.length);
         console.log("saveState state = ", state);
       }
     }, [state]);

    //if(!state) return null;

    const { draggedItem, tasks } = state;
    console.log("AppStateProvider tasks = ", tasks);
    const [timeZoneApiDelay, setTimeZoneApiDelay] = useState(0);

    function incrementDelay(msDelay: number): void {
      console.log("msDelay = ", msDelay);
      setTimeZoneApiDelay(timeZoneApiDelay + msDelay);
    }

    return (
      <AppStateContext.Provider
        value={{
          tasks,
          draggedItem,
          timeZoneApiDelay,
          dispatch,
          findItemIndexById,
          incrementDelay,
        }}
      >
        {children}
      </AppStateContext.Provider>
    );
  }
);

export const useAppState = () => {
  return useContext(AppStateContext);
};
