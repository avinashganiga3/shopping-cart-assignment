import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
