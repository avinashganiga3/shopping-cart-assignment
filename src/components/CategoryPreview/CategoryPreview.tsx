import { FC } from "react";
import cn from "classnames";
import LinkButton from "../LinkButton";
import { CategoryT } from "../../types";
import styles from "./CategoryPreview.module.scss";

export type CategoryPreviewProps = {
  category: CategoryT;
  index?: number;
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ category, index = 0 }) => {
  const { description, imageUrl, name, key } = category;
  return (
    <div className={styles.category}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${name} preview`}
          className={cn(styles.categoryImage, {
            [styles.imageLeft]: index % 2,
          })}
        />
      )}
      <div className={styles.categoryDetails}>
        <h2>{name}</h2>
        <p>{description}</p>
        <LinkButton
          className={styles.button}
          tabIndex={-1}
          to={`/products?category=${key}`}
        >{`Explore ${key}`}</LinkButton>
      </div>
    </div>
  );
};

export default CategoryPreview;
