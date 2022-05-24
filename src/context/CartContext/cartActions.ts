import { createAction } from "../../utils/createAction";
import {
  CartActionType,
  CartItem,
  UpdateCartPayload,
  AddToCartAction,
  RemoveFromCartAction,
  UpdateCartAction,
  OpenCartAction,
  RemoveAllCartItemAction,
} from "./types";
import { ProductT } from "../../components/Product";

export const addToCartAction = (
  payload: ProductT,
  cartItems: CartItem[]
): AddToCartAction =>
  createAction(CartActionType.AddToCart, addToCart(payload, cartItems));

export const removeFromCartAction = (
  payload: ProductT,
  cartItems: CartItem[]
): RemoveFromCartAction =>
  createAction(
    CartActionType.RemoveFromCart,
    removeFromCart(payload, cartItems)
  );

export const clearAllCartItemsAction = (): RemoveAllCartItemAction =>
  createAction(CartActionType.RemoveAllCartItem);

export const updateCartAction = (
  payload: UpdateCartPayload
): UpdateCartAction => createAction(CartActionType.UpdateCart, payload);

export const openCartAction = (payload: Boolean): OpenCartAction =>
  createAction(CartActionType.OpenCart, payload);

export const addToCart = (product: ProductT, cartItems: CartItem[]) => {
  const productExist = cartItems.find((item) => item.id === product.id);
  if (productExist) {
    return cartItems.map((item) => {
      if (item.id === productExist.id) {
        const quantity = item.quantity + 1;
        const totalPrice = quantity * item.price;
        return {
          ...item,
          quantity,
          totalPrice,
        };
      }
      return item;
    });
  }
  return [...cartItems, { ...product, quantity: 1, totalPrice: product.price }];
};

export const removeFromCart = (product: ProductT, cartItems: CartItem[]) => {
  const productExist = cartItems.find((item) => item.id === product.id);
  if (productExist && productExist.quantity === 1) {
    return cartItems.filter((item) => item.id !== productExist.id);
  }
  if (productExist && productExist.quantity > 1) {
    return cartItems.map((item) => {
      if (item.id === productExist.id) {
        const quantity = item.quantity - 1;
        const totalPrice = quantity * item.price;
        return {
          ...item,
          quantity,
          totalPrice,
        };
      }
      return item;
    });
  }
  return cartItems;
};
