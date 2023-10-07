import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div  className='container mx-auto font-poppins'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;