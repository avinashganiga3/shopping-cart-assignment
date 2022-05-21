import { FC } from "react";
import { CategoryT } from "../../types";
import styles from "./CategoryList.module.scss";

export type CategoryListProps = {
  categories: CategoryT[];
  className: string;
};

const CategoryList: FC<CategoryListProps> = ({
  categories = [],
  className,
}) => {
  return (
    <aside className={className}>
      <ul className={styles.list}>
        {categories.map(({ name, key }) => (
          <li key={key}>{name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryList;
