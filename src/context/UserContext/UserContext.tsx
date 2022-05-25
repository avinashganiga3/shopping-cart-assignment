import { FC } from "react";
import { createContext, useMemo, useReducer } from "react";
import userReducer from "./userReducer";
import locaStore from "../../utils/localStore";
import { UserProviderProps, UserState, Dispatch } from "./types";

export const UserContext = createContext<
  { state: UserState; dispatch: Dispatch } | undefined
>(undefined);

export const initialState = {
  firstName: "",
  lastName: "",
  isLoggedIn: locaStore.isLoggedIn,
};

export const UserProvider: FC<UserProviderProps> = ({
  children,
  iState = initialState,
}) => {
  const [state, dispatch] = useReducer(userReducer, iState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
