import styles from "./Cart.module.scss";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartIcon fill="#be2857" width="20px" />
      <div className={styles.cartCount}>{0} items</div>
    </div>
  );
};

export default Cart;
