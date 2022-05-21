import { FC } from "react";
import Button from "../Button";
import styles from "./Product.module.scss";

export type ProductT = {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
};

export type ProductProps = {
  product: ProductT;
};
const Product: FC<ProductProps> = ({ product }) => {
  const { name, imageURL, description, price } = product;
  return (
    <div className={styles.product}>
      <h2 className={styles.title}>{name}</h2>
      <img
        src={imageURL}
        alt={`product ${name}`}
        className={styles.productImage}
      />
      <p className={styles.description}>{description}</p>
      <div className={styles.price}>{`MRP Rs.${price}`}</div>
      <Button className={styles.button}>Buy Now</Button>
    </div>
  );
};

export default Product;
