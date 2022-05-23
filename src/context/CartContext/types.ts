import { ProductT } from "../../components/Product";
import { ActionWithPayload } from "../../utils/createAction";

export enum CartActionType {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  UpdateCart = "UPDATE_CART",
  OpenCart = "OPEN_CART",
}

export type CartItem = {
  quantity: number;
  totalPrice: number;
} & ProductT;

export type CartState = {
  cartItems: CartItem[];
  checkoutPrice: number;
  totalItems: number;
  isCartOpen: Boolean;
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

export type UpdateCartAction = ActionWithPayload<
  CartActionType.UpdateCart,
  UpdateCartPayload
>;

export type OpenCartAction = ActionWithPayload<
  CartActionType.OpenCart,
  Boolean
>;

export type ActionsT =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartAction
  | OpenCartAction;

export type CartProviderProps = { children: React.ReactNode };
export type Dispatch = (action: ActionsT) => void;
