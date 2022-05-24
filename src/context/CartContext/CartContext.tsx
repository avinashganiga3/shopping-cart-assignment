import { FC, useEffect } from "react";
import { createContext, useMemo, useReducer } from "react";
import localStore from "../../utils/localStore";
import { updateCartAction } from "./cartActions";
import cartReducer from "./cartReducer";
import {
  CartProviderProps,
  CartState,
  Dispatch,
  UpdateCartPayload,
} from "./types";

export const CartContext = createContext<
  { state: CartState; dispatch: Dispatch } | undefined
>(undefined);

const initialState = {
  cartItems: localStore.cartItems,
  checkoutPrice: 0,
  totalItems: 0,
  isCartOpen: false,
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { cartItems, totalItems } = state;

  useEffect(() => {
    if (cartItems.length === 0 && !totalItems) {
      return;
    }
    const updateCartData = cartItems.reduce(
      (ac, item) => {
        ac.totalItems += item.quantity;
        ac.checkoutPrice += item.totalPrice;
        return ac;
      },
      { checkoutPrice: 0, totalItems: 0 } as UpdateCartPayload
    );
    localStore.setItem("cartItems", cartItems);
    dispatch(updateCartAction(updateCartData));
  }, [dispatch, cartItems, totalItems]);

  const value: any = useMemo(() => ({ state, dispatch }), [state]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
