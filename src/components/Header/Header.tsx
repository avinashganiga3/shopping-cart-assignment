import { Link } from "react-router-dom";
import cn from "classnames";
import AuthNavHeader from "../AuthNavHeader/AuthNavHeader";
import MainNav from "../MainNav";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={cn(styles.header, "container")}>
        <Link to="/">
          <img
            src="/static/images/logo.png"
            srcSet="/static/images/logo.png, /static/images/logo_2x.png 2x"
            alt="Sabka Bazar Logo"
            className={styles.logo}
            width="190px"
            height="86px"
          />
        </Link>
        <div className={styles.navigations}>
          <AuthNavHeader />
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
