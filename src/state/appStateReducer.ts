import { Action } from "./actions";
import { nanoid } from "nanoid";
import {
  findItemIndexById,
  moveItem,
  removeItemAtIndex,
} from "../utils/arrayUtils";
import { DragItem } from "../DragItem";

export type Task = {
  idTask: string;
  text: string;
};

export type AppState = {
  draggedItem: DragItem | null;
  timeZoneApiDelay: number;
  tasks: Task[];
};

// useImmerReducer. Here we renamed the state into draft, so we know that we can mutate it. Also we’ve
// changed the ADD_LIST case so that it just pushes the new list object to the lists array.
// We don’t need to return the new state value anymore, ImmerJS will handle it
// automatically.
// We also updated the return type of our reducer. The type is now AppState | void.
// Sometimes we still might need to return a new instance of the state, for example to
// reset the state to the initial value, but as we usually won’t return anything - we added
// the void type to the union
export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  //console.log("--appStateReducer--");
  
  switch (action.type) {
    case "SET_DRAGGED_TASK": {
      draft.draggedItem = action.payload;
      break;
    }
    case "ADD_TASK": {
      const { text, taskId } = action.payload;
      draft.tasks.push({
        idTask: nanoid(),
        text: text,
      });
      break;
    }
    case "MOVE_TASK": {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.tasks, draggedId);
      const hoverIndex = findItemIndexById(draft.tasks, hoverId);
      //console.log("dragIndex=", dragIndex, "hoverIndex=", hoverIndex);

      draft.tasks = moveItem(draft.tasks, dragIndex, hoverIndex);
      break;
    }
    case "DELETE_TASK": {
      const { taskId } = action.payload;
      //console.log("-----Number(taskId)= ", Number(taskId));
      const deleteIndex = findItemIndexById(draft.tasks, taskId);
      draft.tasks = removeItemAtIndex(draft.tasks, deleteIndex);
      break;
    }
    // ...
    default: {
      break;
    }
  }
};
