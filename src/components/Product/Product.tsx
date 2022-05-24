import { FC, memo, useState } from "react";
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
      <ProductBuyBtn product={product} />
    </div>
  );
};

const ProductBuyBtn: FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleAddCart = async () => {
    setLoading(true);
    try {
      const res = await postData<CartPostDataT, ResposeT>(apiUrls.addToCart, {
        id: product.id,
      });
      if (res.response === "Success") {
        addToCart(product);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className={styles.priceButton}
      onClick={handleAddCart}
      loading={loading}
    >
      Buy Now
      <Price className={styles.priceInsideBtn} price={product.price}>
        @
      </Price>
    </Button>
  );
};

export default memo(Product);
