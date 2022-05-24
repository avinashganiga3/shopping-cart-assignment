import { useNavigate } from "react-router-dom";
import CartItems from "../CartItems";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import styles from "./Cart.module.scss";
import { detectMob } from "../../utils/helper";
import useCartContext from "../../context/CartContext/useCartContext";

const Cart = () => {
  const { totalItems, toggleCartOpen, isCartOpen } = useCartContext();
  const navigate = useNavigate();

  const toggle = () => {
    if (detectMob()) {
      navigate("/cart");
      return;
    }
    toggleCartOpen(!isCartOpen);
  };

  return (
    <div className={styles.cartBlock}>
      <button className={styles.cart} onClick={toggle}>
        <CartIcon fill="#be2857" width="20px" />
        <div className={styles.cartCount}>{totalItems} items</div>
      </button>
      {isCartOpen && (
        <>
          <div className={styles.backDrop} onClick={toggle} />
          <div className={styles.cartModal}>
            <CartItems />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
