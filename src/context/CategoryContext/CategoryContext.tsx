import { FC } from "react";
import { createContext, useMemo, useReducer } from "react";
import categoryReducer from "./categoryReducer";
import { CategoryProviderProps, CategoryState, Dispatch } from "./types";

export const CategoryContext = createContext<
  { state: CategoryState; dispatch: Dispatch } | undefined
>(undefined);

const initialState = {
  categories: [],
  loading: false,
};

export const CategoryProvider: FC<CategoryProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
