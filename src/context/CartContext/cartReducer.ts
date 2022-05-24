import { CartState, ActionsT, CartActionType } from "./types";

const cartReducer = (state: CartState, action: ActionsT) => {
  switch (action.type) {
    case CartActionType.AddToCart:
    case CartActionType.RemoveFromCart: {
      return { ...state, cartItems: action.payload };
    }
    case CartActionType.UpdateCart: {
      return { ...state, ...action.payload };
    }
    case CartActionType.OpenCart: {
      return { ...state, isCartOpen: action.payload };
    }
    case CartActionType.RemoveAllCartItem: {
      return { ...state, cartItems: [], checkoutPrice: 0, totalItems: 0 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
};

export default cartReducer;
