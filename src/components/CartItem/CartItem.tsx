import { FC } from "react";
import { CartItem } from "../../context/CartContext";
import useCartContext from "../../context/CartContext/useCartContext";
import Price from "../Price";
import styles from "./CartItem.module.scss";

export type CartItemProps = {
  cartItem: CartItem;
};

const CartItems: FC<CartItemProps> = ({ cartItem }) => {
  const { removeFromCart, addToCart } = useCartContext();

  const { id, name, imageURL, quantity, price, totalPrice } = cartItem;
  return (
    <div className={styles.cartItem} key={id}>
      <img src={imageURL} className={styles.productImg} alt={name} />
      <div className={styles.productCartDetails}>
        <h2 className={styles.productName}>{name}</h2>
        <div className={styles.cartCounter}>
          <button
            className={styles.changeBtn}
            onClick={() => removeFromCart(cartItem)}
          >
            &#x02212;
          </button>
          <div className={styles.quantity}>{quantity}</div>
          <button
            className={styles.changeBtn}
            onClick={() => addToCart(cartItem)}
          >
            &#x0002B;
          </button>
          <div className={styles.multiply}>&#x02A2F;</div>
          <Price price={price} />
        </div>
      </div>
      <Price className={styles.totalPrice} price={totalPrice} />
    </div>
  );
};

export default CartItems;
