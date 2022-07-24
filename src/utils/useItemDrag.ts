import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { DragItem } from "../DragItem";
import { setDraggedItem } from "../state/actions";

// This hook will return a drag method that accepts the ref of a draggable element.
// Whenever we start dragging the item, the hook will dispatch a SET_DRAG_ITEM action
// to save the item in the app state. When we stop dragging, it will dispatch this action
// again with null as the payload.
export const useItemDrag = (item: DragItem) => {
  const { draggedItem, dispatch } = useAppState();

  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      //console.log("----setDraggedItem(item)", item);
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => {
      dispatch(setDraggedItem(null));
    },
  });

  return { drag };
};
