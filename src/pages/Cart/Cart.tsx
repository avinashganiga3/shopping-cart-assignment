import CartItems from "../../components/CartItems";
import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <main className={styles.cartPage}>
      <CartItems inPage={true} />
    </main>
  );
};

export default Cart;
