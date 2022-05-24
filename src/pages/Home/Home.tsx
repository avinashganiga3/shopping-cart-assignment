import { useEffect, useState } from "react";
import cn from "classnames";
import Slider, { BannerItems } from "../../components/Slider";
import CategoryPreview from "../../components/CategoryPreview";
import { getData } from "../../api";
import { apiUrls } from "../../api/constants";
import useCategoryContext from "../../context/CategoryContext/useCategoryContext";

import styles from "./Home.module.scss";
import Loader from "../../components/Loader";

const Home = () => {
  const [banners, setBanner] = useState<BannerItems[]>([]);
  const [bannerLoading, setBannerLoading] = useState(false);
  const { categories, loading } = useCategoryContext();

  useEffect(() => {
    const callAPI = async () => {
      setBannerLoading(true);
      try {
        const res = await getData<BannerItems[]>(apiUrls.banners);
        setBanner(res);
      } catch (error) {
        console.log("something went wrong", error);
      } finally {
        setBannerLoading(false);
      }
    };
    callAPI();
  }, []);

  return (
    <main className={cn(styles.homePage, "container")}>
      {(loading || bannerLoading) && <Loader />}
      <Slider items={banners} />
      {categories.map((category, index) => (
        <section key={category.key} className={styles.category}>
          <CategoryPreview category={category} index={index} />
        </section>
      ))}
    </main>
  );
};

export default Home;
