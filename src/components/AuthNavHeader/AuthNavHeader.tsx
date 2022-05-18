import { Link } from "react-router-dom";
import styles from "./AuthNavHeader.module.scss";

const AuthNavHeader = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.authHeader}>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavHeader;
