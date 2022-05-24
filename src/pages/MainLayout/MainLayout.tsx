import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
