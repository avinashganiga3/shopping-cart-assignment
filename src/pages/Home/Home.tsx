import { useEffect, useState } from "react";
import cn from "classnames";
import Slider, { BannerItems } from "../../components/Slider";
import CategoryPreview from "../../components/CategoryPreview";
import { CategoryT } from "../../types";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";

import styles from "./Home.module.scss";

const Home = () => {
  const [banners, setBanner] = useState<BannerItems[]>([]);
  const [categories, setCategories] = useState<CategoryT[]>([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await getData<BannerItems[]>(apiUrls.banners);
        const cat: any = await getData<CategoryT[]>(apiUrls.categories);
        setCategories(cat);
        setBanner(res);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    callAPI();
  }, []);

  return (
    <main className={cn(styles.homePage, "container")}>
      <Slider items={banners} />
      <hr className={styles.separator} />
      {categories.map((category, index) => (
        <section key={category.key} className={styles.category}>
          <CategoryPreview category={category} index={index} />
        </section>
      ))}
    </main>
  );
};

export default Home;
