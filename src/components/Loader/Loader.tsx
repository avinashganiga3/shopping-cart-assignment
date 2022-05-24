import { FC } from "react";
import cn from "classnames";
import styles from "./Loader.module.scss";

export type LoaderSpinnerProps = {
  className?: string;
};
export const LoaderSpinner: FC<LoaderSpinnerProps> = ({ className }) => {
  return (
    <div
      className={cn(styles.loaderSpinner, className)}
      aria-label="loader"
    ></div>
  );
};

const Loader = () => {
  return (
    <div className={styles.pageLoader} aria-label="page loading">
      <LoaderSpinner />
    </div>
  );
};

export default Loader;
