import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";
import CategoryList from "../../components/CategoryList";
import Product, { ProductT } from "../../components/Product";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";
import useCategoryContext from "../../context/CategoryContext/useCategoryContext";
import styles from "./Products.module.scss";

const Products = () => {
  const { categories } = useCategoryContext();

  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<ProductT[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductT[]>([]);
  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await getData<ProductT[]>(apiUrls.products);
        setProducts(res);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    callAPI();
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
