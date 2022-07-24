import { AppState } from "./state/appStateReducer";
//import { appData } from "./state/data";

export const save = (payload: AppState) => {
  //   console.log(
  //     "process.env.REACT_APP_BACKEND_ENDPOINT = ",
  //     process.env.REACT_APP_BACKEND_ENDPOINT
  //   );
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error while saving the state.");
    }
  });
};

export const load = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(
    (response) => {
      if (response.ok) {
        return response.json() as Promise<AppState>;
      } else {
        //return JSON.stringify(appData);
        //return new Promise<AppState>(appData);
        //return appData as Promise<AppState>;
        throw new Error("Error while loading the state.");
      }
    }
  );
};
