import React from "react";
import "./index.css";
import { App } from "./App";
import { DndProvider } from "react-dnd";
import { AppStateProvider } from "./state/AppStateContext";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

import { createRoot } from 'react-dom/client';

// interface Props {
//   children?: React.ReactNode;
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <DndProvider backend={Backend}>
//       <AppStateProvider>
//         <App />
//       </AppStateProvider>
//     </DndProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//react-18   https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <DndProvider backend={Backend}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>
  </React.StrictMode>
);