import { ReactNode, FC, ReactElement } from "react";
import {
  UserProvider,
  UserState,
  initialState as initialUserState,
} from "../context/UserContext";
import { CartProvider, CartState } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";

export type AppWrapperProps = {
  userState?: UserState;
  cartState?: CartState;
  children: ReactNode;
};

const AppWrapper: FC<AppWrapperProps> = ({
  userState = { ...initialUserState, isLoggedIn: false },
  cartState,
  children,
}) => {
  return (
    <BrowserRouter>
      <UserProvider iState={userState}>
        <CartProvider iCartState={cartState}>{children}</CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

type CustomRenderOptions = RenderOptions & {
  wrapperProps: any;
};

export const customRender = (ui: ReactElement, options?: CustomRenderOptions) =>
  render(ui, {
    wrapper: (props) => <AppWrapper {...props} {...options?.wrapperProps} />,
    ...options,
  });
