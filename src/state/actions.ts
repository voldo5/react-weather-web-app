import { DragItem } from "../DragItem";

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; taskId: string };
}

interface DeleteTaskAction {
  type: "DELETE_TASK";
  payload: { taskId: string };
}
interface MoveListAction {
  type: "MOVE_TASK";
  payload: {
    draggedId: string;
    hoverId: string;
  };
}
interface SetDraggedItem {
  type: "SET_DRAGGED_TASK";
  payload: DragItem | null;
}

export type Action =
  | AddTaskAction
  | MoveListAction
  | SetDraggedItem
  | DeleteTaskAction;

export const addTask = (text: string, taskId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    taskId,
  },
});

export const deleteTask = (taskId: string): Action => ({
  type: "DELETE_TASK",
  payload: {
    taskId,
  },
});

export const moveTask = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_TASK",
  payload: {
    draggedId,
    hoverId,
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_TASK",
  payload: draggedItem,
});

// export type Action =
//   //   | {
//   //       type: "ADD_LIST";
//   //       payload: string;
//   //     }
// | {
// type: "MOVE_LIST"
// payload: {
// draggedId: string
// hoverId: string
// }
// }
//   {
//     type: "ADD_TASK";
//     payload: { text: string; taskId: string };
//   };

// interface AddListAction {
//   type: "ADD_LIST";
//   payload: string;
// }

// | {
// type: "SET_DRAGGED_ITEM"
// payload: DragItem | null
// }

//  | AddListAction
