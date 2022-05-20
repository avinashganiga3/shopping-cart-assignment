import { createContext, useMemo, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [state, setState] = useState(1);

  const changeState = () => {
    setState((p) => p + 1);
  };
  const value = useMemo(
    () => ({
      state,
      changeState,
    }),
    [state]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
