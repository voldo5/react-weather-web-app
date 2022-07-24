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
import { save } from "../api";

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
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

    //todo uncomment if using backend to store state  
    // useEffect(() => {     
    //   save(state);
    // }, [state]);
    const { draggedItem, tasks } = state;
    const [timeZoneApiDelay, setTimeZoneApiDelay] = useState(0);
    function incrementDelay(msDelay: number): void {
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
