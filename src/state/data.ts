import { CardSize } from "../interfaces/interface";
import { AppState } from "./appStateReducer";

export const appData: AppState = {
  draggedItem: null,
  timeZoneApiDelay: 1200,
  tasks: [
    { idTask: "0", text: "Toronto, CA" },
    { idTask: "1", text: "kyiv" },
    { idTask: "2", text: "Rome, IT" },
    { idTask: "3", text: "Haifa, IL" },
    { idTask: "4", text: "Tel Aviv, IL" },
    { idTask: "5", text: "Cherkasy" },
    { idTask: "6", text: "Mississauga, CA" },
  ],
};

export const CARD_SIZE: CardSize = {
  width: 320,
  height: 192,
};

//  h 120-200    w 192-320
// export const appData: AppState = {
//   draggedItem: null,
//   timeZoneApiDelay: 1200,
//   tasks: [
//     { idTask: "0", text: "Toronto, CA" },
//     { idTask: "1", text: "kyiv" },
//     { idTask: "2", text: "Rome, IT" },
//   ],
// };

//Cherkasy; Odesa, UA; Tel Aviv, IL; Jerusalem, IL, Boston, US; Mississauga, CA; Khmelnytskyi, UA;

// const appData: AppState = {
//   list: {
//     idList: "0",
//     text: "",
//     tasks: [
//       { idTask: "0", text: "Kyiv" },
//       { idTask: "5", text: "Toronto, CA" },
//     ],
//   },
//   draggedItem: null,
// };

// { idTask: "3", text: "Haifa, IL" },
//       { idTask: "4", text: "Tel Aviv, IL" },
//       { idTask: "5", text: "Cherkasy" },
//       { idTask: "6", text: "Mississauga, CA" },
// { id: "8", text: "Rome, IT" },
//{ idTask: "2", text: "Khmelnytskyi, UA" },
