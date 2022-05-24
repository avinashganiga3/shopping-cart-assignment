import { useCallback, useContext } from "react";
import { UserSignUpPayloadT } from "./types";
import { signUpAction, signOutAction, signInAction } from "./userActions";
import localStore from "../../utils/localStore";
import { UserContext } from "./UserContext";

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  const { state, dispatch } = context;

  const signUpUser = useCallback(
    (user: UserSignUpPayloadT) => {
      dispatch(signUpAction(user));
      localStorage.setItem("user", JSON.stringify(user));
      localStore.setItem("isLoggedIn", true);
    },
    [dispatch]
  );

  const signOutUser = useCallback(() => {
    dispatch(signOutAction());
    localStore.setItem("isLoggedIn", false);
    localStore.removeItem("user");
  }, [dispatch]);

  const signInUser = useCallback(() => {
    dispatch(signInAction());
    localStore.setItem("isLoggedIn", true);
  }, [dispatch]);

  return {
    ...state,
    signUpUser,
    signOutUser,
    signInUser,
    dispatch,
  };
};

export default useUserContext;
