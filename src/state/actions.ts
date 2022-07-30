import { DragItem } from "../DragItem";
//import { Task } from "../state/appStateReducer";

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; taskId: string };
}

// interface AddTasksAction {
//   type: "ADD_TASKS";
//   payload: { tasks: Task[] };
// }

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
  // | AddTasksAction
  | MoveListAction
  | SetDraggedItem
  | DeleteTaskAction;

// export const addTasks = (tasks: Task[]): Action => ({
//   type: "ADD_TASKS",
//   payload: {
//     tasks
//   },
// });

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
