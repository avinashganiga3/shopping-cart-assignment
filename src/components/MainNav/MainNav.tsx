import { Link } from "react-router-dom";
import useCartContext from "../../context/CartContext/useCartContext";
import Cart from "../Cart";
import styles from "./MainNav.module.scss";

const MainNav = () => {
  const { cartItems, checkoutPrice } = useCartContext();

  console.log(cartItems, checkoutPrice);
  return (
    <div className={styles.mainNavContents}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Cart />
    </div>
  );
};

export default MainNav;
