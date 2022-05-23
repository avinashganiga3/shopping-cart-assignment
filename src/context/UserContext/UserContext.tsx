import { FC } from "react";
import { createContext, useMemo, useReducer } from "react";
import userReducer from "./userReducer";
import { UserProviderProps, UserState, Dispatch } from "./types";

export const UserContext = createContext<
  { state: UserState; dispatch: Dispatch } | undefined
>(undefined);

const initialState = {
  firstName: "",
  lastName: "",
  isLoggedIn: false,
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
