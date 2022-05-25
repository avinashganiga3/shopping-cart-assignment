import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";
import CategoryList from "../../components/CategoryList";
import Product, { ProductT } from "../../components/Product";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";
import useCategoryContext from "../../context/CategoryContext/useCategoryContext";
import styles from "./Products.module.scss";
import Loader from "../../components/Loader";

const Products = () => {
  const { categories, loading } = useCategoryContext();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<ProductT[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState<ProductT[]>([]);
  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    const callAPI = async () => {
      setProductsLoading(true);
      try {
        const res = await getData<ProductT[]>(apiUrls.products);
        setProducts(res);
      } catch (error) {
        console.log("something went wrong", error);
      } finally {
        setProductsLoading(false);
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
      {(loading || productsLoading) && <Loader />}
      <CategoryList categories={categories} className={styles.categories} />
      <main className={styles.products}>
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        {filteredProducts.length === 0 && !productsLoading && (
          <h2>No Products Found</h2>
        )}
      </main>
    </div>
  );
};

export default Products;
