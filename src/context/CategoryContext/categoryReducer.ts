import { CategoryState, ActionsT, CategoryActionType } from "./types";

const categoryReducer = (state: CategoryState, action: ActionsT) => {
  console.log(action);
  switch (action.type) {
    case CategoryActionType.AddCategories: {
      return { ...state, categories: [...action.payload], loading: false };
    }
    case CategoryActionType.CategoriesLoading: {
      return { ...state, loading: true };
    }
    case CategoryActionType.CategoriesFailed: {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
};

export default categoryReducer;
