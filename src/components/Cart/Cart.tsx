import { useState } from "react";
import CartItems from "../CartItems";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState<Boolean>(true);

  const toggle = () => setCartOpen((open) => !open);

  return (
    <div className={styles.cartBlock}>
      <button className={styles.cart} onClick={toggle}>
        <CartIcon fill="#be2857" width="20px" />
        <div className={styles.cartCount}>{0} items</div>
      </button>
      {cartOpen && (
        <div className={styles.cartModal}>
          <CartItems onClose={toggle} />
        </div>
      )}
    </div>
  );
};

export default Cart;
