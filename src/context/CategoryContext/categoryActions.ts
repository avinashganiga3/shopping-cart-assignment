import { createAction } from "../../utils/createAction";
import {
  CategoryT,
  CategoryActionType,
  AddCategoryAction,
  CategoryLoadingAction,
  CategoryFailedAction,
} from "./types";

export const addCategoryAction = (payload: CategoryT[]): AddCategoryAction =>
  createAction(CategoryActionType.AddCategories, payload);

export const categoryLoadingAction = (): CategoryLoadingAction =>
  createAction(CategoryActionType.CategoriesLoading);

export const categoryFailedAction = (payload: Error): CategoryFailedAction =>
  createAction(CategoryActionType.CategoriesFailed, payload);
