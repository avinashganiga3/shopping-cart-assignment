import { useEffect, useState } from "react";
import cn from "classnames";
import { CategoryT } from "../../types";
import CategoryList from "../../components/CategoryList";
import Product, { ProductT } from "../../components/Product";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";
import styles from "./Products.module.scss";

const Products = () => {
  const [categories, setCategories] = useState<CategoryT[]>([]);
  const [products, setProducts] = useState<ProductT[]>([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await getData(apiUrls.products);
        const cat = await getData(apiUrls.categories);
        setProducts(res);
        setCategories(cat);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    callAPI();
  }, []);

  return (
    <div className={cn(styles.productsPage, "container")}>
      <CategoryList categories={categories} className={styles.categories} />
      <section className={styles.products}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </section>
    </div>
  );
};

export default Products;
