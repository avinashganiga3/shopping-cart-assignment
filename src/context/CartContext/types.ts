import { ProductT } from "../../components/Product";
import { ActionWithPayload, Action } from "../../utils/createAction";

export enum CartActionType {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  UpdateCart = "UPDATE_CART",
  OpenCart = "OPEN_CART",
  RemoveAllCartItem = "REMOVE_ALL_CART_ITEM",
}

export type CartItem = {
  quantity: number;
  totalPrice: number;
} & ProductT;

export type CartState = {
  cartItems: CartItem[];
  checkoutPrice: number;
  totalItems: number;
  isCartOpen: boolean;
};

export type UpdateCartPayload = {
  checkoutPrice: number;
  totalItems: number;
};

export type AddToCartAction = ActionWithPayload<
  CartActionType.AddToCart,
  CartItem[]
>;
export type RemoveFromCartAction = ActionWithPayload<
  CartActionType.RemoveFromCart,
  CartItem[]
>;

export type RemoveAllCartItemAction = Action<CartActionType.RemoveAllCartItem>;

export type UpdateCartAction = ActionWithPayload<
  CartActionType.UpdateCart,
  UpdateCartPayload
>;

export type OpenCartAction = ActionWithPayload<
  CartActionType.OpenCart,
  boolean
>;

export type ActionsT =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartAction
  | RemoveAllCartItemAction
  | OpenCartAction;

export type CartProviderProps = {
  children: React.ReactNode;
  iCartState?: CartState;
};
export type Dispatch = (action: ActionsT) => void;
