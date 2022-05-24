import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainLayout = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header />
      <div className="flex1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
