import { UserState, ActionsT, UserActionType } from "./types";

const userReducer = (state: UserState, action: ActionsT) => {
  switch (action.type) {
    case UserActionType.SignUpUser: {
      return { ...state, ...action.payload, isLoggedIn: true };
    }
    case UserActionType.SignOutUser: {
      return { ...state, isLoggedIn: false };
    }
    case UserActionType.SignInUser: {
      return { ...state, isLoggedIn: true };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
};

export default userReducer;
