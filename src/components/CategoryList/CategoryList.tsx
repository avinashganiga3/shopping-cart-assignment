import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";
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
  const [searchParams, setSearchParam] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setCategory] = useState<CategoryT>({} as CategoryT);
  const [open, setOpen] = useState(false);

  const onSelect = (category: CategoryT) => {
    if (category.id === selectedCategory.id) {
      setCategory({} as CategoryT);
      setSearchParam({});
    } else {
      setCategory(category);
      setSearchParam({ category: category.id });
    }
    setOpen(false);
  };

  useEffect(() => {
    if (!selectedCategory.name && categoryParam && categories.length > 0) {
      const sCategory = categories.find(
        (category) => category.id === categoryParam
      ) as CategoryT;
      setCategory(sCategory);
    }
  }, [categoryParam, categories, selectedCategory]);

  return (
    <aside className={className}>
      <div className={styles.selectedValue} onClick={() => setOpen((o) => !o)}>
        <div>{selectedCategory.name || "Select Category"}</div>
        <div className={cn(styles.icon, { [styles.rotate]: open })}>
          &#x022C1;
        </div>
      </div>
      <ul className={cn(styles.list, { [styles.active]: open })}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={cn({
              [styles.selected]: category.id === selectedCategory.id,
            })}
          >
            <button onClick={() => onSelect(category)}>{category.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryList;
