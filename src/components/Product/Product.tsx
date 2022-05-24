import { FC } from "react";
import { postData } from "../../api";
import { apiUrls } from "../../api/constants";
import useCartContext from "../../context/CartContext/useCartContext";
import { ResposeT } from "../../types";
import Button from "../Button";
import Price from "../Price";
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

type CartPostDataT = {
  id: string;
};

export type ProductProps = {
  product: ProductT;
};
const Product: FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddCart = async () => {
    try {
      const res = await postData<CartPostDataT, ResposeT>(apiUrls.addToCart, {
        id: product.id,
      });
      if (res.response === "Success") {
        addToCart(product);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <Price className={styles.price} price={price}>
        MRP
      </Price>
      <Button className={styles.priceButton} onClick={handleAddCart}>
        Buy Now{" "}
        <Price className={styles.priceInsideBtn} price={price}>
          @
        </Price>
      </Button>
    </div>
  );
};

export default Product;
