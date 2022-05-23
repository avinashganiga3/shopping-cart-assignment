import { ActionWithPayload, Action } from "../../utils/createAction";

export enum UserActionType {
  SignInUser = "SIGN_IN_USER",
  SignUpUser = "SIGN_UP_USER",
  SignOutUser = "SIGN_OUT_USER",
}
export type UserSignUpPayloadT = {
  firstName: string;
  lastName?: string;
};

export type UserState = {
  firstName: string;
  lastName?: string;
  isLoggedIn: Boolean;
};

export type SignUpAction = ActionWithPayload<
  UserActionType.SignUpUser,
  UserSignUpPayloadT
>;

export type SignOutAction = Action<UserActionType.SignOutUser>;
export type SignInAction = Action<UserActionType.SignInUser>;

export type ActionsT = SignUpAction | SignOutAction | SignInAction;

export type UserProviderProps = { children: React.ReactNode };
export type Dispatch = (action: ActionsT) => void;
