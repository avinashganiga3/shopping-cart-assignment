import { FC } from "react";
import lowestPrice from "../../assets/images/lowest-price.png";
import Button from "../Button";
import styles from "./CartItems.module.scss";

let items = [
  {
    name: "Fresho Kiwi - Green, 3 pcs",
    imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    price: 87,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-kiwi-3",
    id: "5b6c6a7f01a7c38429530883",
    quantity: 1,
  },
  {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
    quantity: 2,
  },
];

export type CartItemsProps = {
  onClose: () => void;
};
const CartItems: FC<CartItemsProps> = ({ onClose }) => {
  return (
    <div className={styles.cartItems}>
      <div className={styles.cartHeader}>
        <h2 className={styles.name}>
          My Cart <span>(1 item)</span>
        </h2>
        <button className={styles.close} onClick={onClose}>
          &#x02A2F;
        </button>
      </div>
      <div className={styles.cartItemsList}>
        {items.map(({ id, name, imageURL, quantity, price }) => (
          <div className={styles.item} key={id}>
            <img src={imageURL} className={styles.productImg} alt={name} />
            <div className={styles.productCartDetails}>
              <h2 className={styles.productName}>{name}</h2>
              <div className={styles.cartCounter}>
                <button className={styles.changeBtn}>&#x02212; </button>
                <div className={styles.quantity}>{quantity}</div>
                <button className={styles.changeBtn}>&#x0002B;</button>
                <div className={styles.multiply}>&#x02A2F;</div>
                <div>Rs.{price}</div>
              </div>
            </div>
            <div className={styles.totalPrice}>Rs.{quantity * price}</div>
          </div>
        ))}
      </div>
      <div className={styles.offer}>
        <img src={lowestPrice} alt="lowest price guaranteed" />
        <p className={styles.text}>You won't find it cheaper anywhere</p>
      </div>
      <div className={styles.buttonContainer}>
        <p className={styles.promo}>Promocode can be applied on Payment Page</p>
        <Button>
          <div className={styles.buttonContent}>
            <div>Proceed to checkout</div>
            <div className={styles.checkoutPrice}>Rs.187</div>
            <div className={styles.icon}>&#x0003E;</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CartItems;
