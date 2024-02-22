import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Navbar/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
