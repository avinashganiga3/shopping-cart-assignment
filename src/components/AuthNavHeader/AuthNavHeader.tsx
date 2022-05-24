import { Link } from "react-router-dom";
import useCartContext from "../../context/CartContext/useCartContext";
import useUserContext from "../../context/UserContext/useUserContext";
import styles from "./AuthNavHeader.module.scss";

const AuthNavHeader = () => {
  const { isLoggedIn, signOutUser } = useUserContext();
  const { clearAllCart } = useCartContext();

  const onSignOut = () => {
    signOutUser();
    clearAllCart();
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.authHeader}>
        {isLoggedIn ? (
          <li>
            <button className={styles.signOutButton} onClick={onSignOut}>
              Sign Out
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default AuthNavHeader;
