import { useContext, useEffect } from "react";
import {
  addCategoryAction,
  categoryLoadingAction,
  categoryFailedAction,
} from "./categoryActions";
import { CategoryT } from "./types";
import { CategoryContext } from "./CategoryContext";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";

const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  const { state, dispatch } = context;
  const { categories, loading, error } = state;

  useEffect(() => {
    if (categories.length === 0 && !loading && !error) {
      dispatch(categoryLoadingAction());
      getData<CategoryT[]>(apiUrls.categories)
        .then((data) => {
          dispatch(addCategoryAction(data));
        })
        .catch((err) => dispatch(categoryFailedAction(err)));
    }
  }, [categories, loading, error, dispatch]);

  return {
    ...state,
    dispatch,
  };
};

export default useCategoryContext;
