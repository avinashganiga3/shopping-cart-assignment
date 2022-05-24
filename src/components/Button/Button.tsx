import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";
import { LoaderSpinner } from "../Loader/Loader";
import styles from "./Button.module.scss";

type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={cn(styles.button, className)}
      disabled={disabled || loading}
      {...buttonProps}
    >
      {loading ? <LoaderSpinner className={styles.loader} /> : children}
    </button>
  );
};

export default Button;
