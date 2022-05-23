import lowestPrice from "../../assets/images/lowest-price.png";
import useCartContext from "../../context/CartContext/useCartContext";
import Button from "../Button";
import CartItem from "../CartItem";
import Price from "../Price/Price";
import styles from "./CartItems.module.scss";

const CartItems = () => {
  const { cartItems, checkoutPrice, toggleCartOpen } = useCartContext();

  const closeCart = () => toggleCartOpen(false);

  return (
    <div className={styles.cartItems}>
      <div className={styles.cartHeader}>
        <h2 className={styles.name}>
          My Cart <span>(1 item)</span>
        </h2>
        <button className={styles.close} onClick={closeCart}>
          &#x02A2F;
        </button>
      </div>

      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItemsList}>
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          </div>
          <div className={styles.offer}>
            <img src={lowestPrice} alt="lowest price guaranteed" />
            <p className={styles.text}>You won't find it cheaper anywhere</p>
          </div>
          <div className={styles.buttonContainer}>
            <p className={styles.promo}>
              Promocode can be applied on Payment Page
            </p>
            <Button>
              <div className={styles.buttonContent}>
                <div>Proceed to checkout</div>
                <Price className={styles.checkoutPrice} price={checkoutPrice} />
                <div className={styles.icon}>&#x0003E;</div>
              </div>
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.cartEmptyBlock}>
          <div className={styles.cartEmpty}>
            <h2 className={styles.cartEmptyTitle}>No items in your cart</h2>
            <p className={styles.cartEmptyDesc}>
              Your Favorite items are click away
            </p>
          </div>
          <Button onClick={closeCart}>Start Shopping</Button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
