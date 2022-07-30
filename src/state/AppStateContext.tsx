import {
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

type AppStateContextProps = {
  tasks: Task[];
  draggedItem: DragItem | null;
  defaultRequestDelay: number;
  dispatch: Dispatch<Action>;
  findItemIndexById(items: Task[], id: string): number;
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
    
    //const [defaultRequestDelay, setTimeZoneApiDelay] = useState(1200);

    //todo uncomment if using backend to store state  
    // useEffect(() => {     
    //   save(state);
    // }, [state]);

     useEffect(() => {       
       if (state.tasks.length > 0) {
         saveState(state);
       }
     }, [state]);

    //if(!state) return null;

    const { draggedItem, tasks, defaultRequestDelay } = state;

    return (
      <AppStateContext.Provider
        value={{
          tasks,
          draggedItem,
          defaultRequestDelay,          
          dispatch,
          findItemIndexById,
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
