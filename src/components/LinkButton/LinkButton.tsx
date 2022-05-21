import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cn from "classnames";
import styles from "./LinkButton.module.scss";

const LinkButton: FC<LinkProps> = ({ children, className, ...linkProps }) => {
  return (
    <Link className={cn(styles.linkButton, className)} {...linkProps}>
      {children}
    </Link>
  );
};

export default LinkButton;
