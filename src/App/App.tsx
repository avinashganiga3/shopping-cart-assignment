import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          {/* Redirect */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
