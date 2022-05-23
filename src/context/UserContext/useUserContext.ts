import { useCallback, useContext } from "react";
import { UserSignUpPayloadT } from "./types";
import { signUpAction, signOutAction, signInAction } from "./userActions";
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
    },
    [dispatch]
  );

  const signOutUser = useCallback(() => {
    dispatch(signOutAction());
  }, [dispatch]);

  const signInUser = useCallback(() => {
    dispatch(signInAction());
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
