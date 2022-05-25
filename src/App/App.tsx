import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import MainLayout from "../pages/MainLayout";
import styles from "./App.module.scss";

const Cart = lazy(() => import("../pages/Cart"));
const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Products = lazy(() => import("../pages/Products"));

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
};

export default App;
