import { useCallback, useContext } from "react";
import { ProductT } from "../../components/Product";
import {
  addToCartAction,
  removeFromCartAction,
  openCartAction,
} from "./cartActions";
import { CartContext } from "./CartContext";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  const { state, dispatch } = context;
  const { cartItems } = state;

  const addToCart = useCallback(
    (product: ProductT) => {
      dispatch(addToCartAction(product, cartItems));
    },
    [dispatch, cartItems]
  );

  const removeFromCart = useCallback(
    (product: ProductT) => {
      dispatch(removeFromCartAction(product, cartItems));
    },
    [dispatch, cartItems]
  );

  const toggleCartOpen = useCallback(
    (open: Boolean) => {
      dispatch(openCartAction(open));
    },
    [dispatch]
  );

  return {
    ...state,
    addToCart,
    removeFromCart,
    toggleCartOpen,
    dispatch,
  };
};

export default useCartContext;