import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";
import { CategoryT } from "../../types";
import CategoryList from "../../components/CategoryList";
import Product, { ProductT } from "../../components/Product";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";
import styles from "./Products.module.scss";

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [categories, setCategories] = useState<CategoryT[]>([]);

  const [products, setProducts] = useState<ProductT[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductT[]>([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await getData<ProductT[]>(apiUrls.products);
        const cat = await getData<CategoryT[]>(apiUrls.categories);
        setProducts(res);
        setCategories(cat);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    callAPI();
    console.log("mounted");
  }, []);

  useEffect(() => {
    let fProducts = [];
    if (!selectedCategory) {
      fProducts = [...products];
    } else {
      fProducts = products.filter((cat) => cat.category === selectedCategory);
    }
    setFilteredProducts(fProducts);
  }, [selectedCategory, products]);

  return (
    <div className={cn(styles.productsPage, "container")}>
      <CategoryList categories={categories} className={styles.categories} />
      <main className={styles.products}>
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        {filteredProducts.length === 0 && <h2>No Products Found</h2>}
      </main>
    </div>
  );
};

export default Products;
