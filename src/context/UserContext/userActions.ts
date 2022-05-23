import { createAction } from "../../utils/createAction";
import {
  UserActionType,
  UserSignUpPayloadT,
  SignUpAction,
  SignOutAction,
  SignInAction,
} from "./types";

export const signUpAction = (payload: UserSignUpPayloadT): SignUpAction =>
  createAction(UserActionType.SignUpUser, payload);

export const signOutAction = (): SignOutAction =>
  createAction(UserActionType.SignOutUser);

export const signInAction = (): SignInAction =>
  createAction(UserActionType.SignInUser);
