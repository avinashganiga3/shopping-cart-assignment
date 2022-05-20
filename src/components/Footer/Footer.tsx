import cn from "classnames";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={cn(styles.content, "container")}>
        Copyright &#x000A9; 2011-2022 Sabka Bazzar Grocery Supplies Pvt Ltd
      </p>
    </footer>
  );
};
export default Footer;
