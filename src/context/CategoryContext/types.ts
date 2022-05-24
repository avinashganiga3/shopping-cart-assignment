import { ActionWithPayload, Action } from "../../utils/createAction";

export enum CategoryActionType {
  AddCategories = "ADD_CATEGORIES",
  CategoriesLoading = "CATEGORIES_PENDING",
  CategoriesFailed = "CATEGORIES_FAILED",
}

export type CategoryT = {
  description: string;
  enabled: false;
  id: string;
  imageUrl: string;
  key: string;
  name: string;
  order: number;
};

export type CategoryState = {
  categories: CategoryT[];
  loading: Boolean;
  error?: Error;
};

export type AddCategoryAction = ActionWithPayload<
  CategoryActionType.AddCategories,
  CategoryT[]
>;

export type CategoryLoadingAction =
  Action<CategoryActionType.CategoriesLoading>;

export type CategoryFailedAction = ActionWithPayload<
  CategoryActionType.CategoriesFailed,
  Error
>;

export type ActionsT =
  | AddCategoryAction
  | CategoryLoadingAction
  | CategoryFailedAction;

export type CategoryProviderProps = { children: React.ReactNode };
export type Dispatch = (action: ActionsT) => void;
