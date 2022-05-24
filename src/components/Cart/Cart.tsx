import { useNavigate } from "react-router-dom";
import CartItems from "../CartItems";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import { detectMob } from "../../utils/helper";
import useCartContext from "../../context/CartContext/useCartContext";
import styles from "./Cart.module.scss";
import Modal from "../Modal";

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

      <Modal active={isCartOpen} toggle={toggle}>
        <CartItems />
      </Modal>
    </div>
  );
};

export default Cart;
