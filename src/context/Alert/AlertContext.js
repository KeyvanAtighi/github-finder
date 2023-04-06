import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  // init state
  const initialState = null;
  // hooks
  const [state, dispach] = useReducer(AlertReducer, initialState);

  const setAlert = (type, message) => {
    dispach({
      type: "SET_ALERT",
      payload: { message, type },
    });

    setTimeout(() => dispach({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
