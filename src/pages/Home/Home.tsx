import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import CategoryPreview from "../../components/CategoryPreview";
import { CategoryT } from "../../types";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";

import styles from "./Home.module.scss";

const Home = () => {
  const [banners, setBanner] = useState([]);
  const [categories, setCategories] = useState<CategoryT[]>([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await getData(apiUrls.banners);
        const cat = await getData(apiUrls.categories);
        setCategories(cat);
        setBanner(res);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    callAPI();
  }, []);

  return (
    <main className="container">
      <Slider items={banners} />
      <hr className={styles.separator} />
      {categories.map((category, index) => (
        <section key={category.key}>
          <CategoryPreview category={category} index={index} />
          {index !== categories.length - 1 && (
            <hr className={styles.separator} />
          )}
        </section>
      ))}
    </main>
  );
};

export default Home;
