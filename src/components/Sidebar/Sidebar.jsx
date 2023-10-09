import { FaRegUser,FaRegIdCard,FaCheckSquare,FaBookOpen,FaBars } from "react-icons/fa";
import LowerSideBar from "../LowerSideBar/LowerSideBar";

const Sidebar = () => {
  return (
    <div className="hidden lg:block lg:mt-10 lg:justify-center lg:item-center">

      <h2 className="text-center font-semibold text-xl">Some of our tools<br></br> Explore This</h2>
      
      <div   data-aos="fade-down-left"
      className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 ml-6 mt-6 rounded-lg

">
      <a href="" className="p-4 flex text-lg items-center rounded-lg">
       <FaRegUser className="mr-3 text-4xl" > </FaRegUser> Manager Tools
       </a>
      </div>
      <div   data-aos="fade-down-left"
     className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mt-1 ml-6 rounded-lg">
      <a href="" className="p-4 flex text-lg items-center border rounded-lg">
       <FaRegIdCard className="mr-3 text-4xl" > </FaRegIdCard> Guestlist
       </a>
      </div>
      <div  data-aos="fade-down-left"
      className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mt-1 ml-6 rounded-lg">
      <a href="" className="p-4 flex text-lg items-center border rounded-lg">
       <FaCheckSquare className="mr-3 text-4xl" > </FaCheckSquare> Checklist
       </a>
      </div>
      <div   data-aos="fade-down-left"
      className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mt-1 ml-6 rounded-lg">
      <a href="" className="p-4 flex text-lg items-center border rounded-lg">
       <FaRegUser className="mr-3 text-4xl" > </FaRegUser> Budget
       </a>
      </div>
      <div  data-aos="fade-down-left"
     className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mt-1 ml-6 rounded-lg">
      <a href="" className="p-4 flex text-lg items-center border rounded-lg">
       <FaBookOpen className="mr-3 text-4xl" > </FaBookOpen> Advice
       </a>
      </div>
      <div   data-aos="fade-down-left"
      className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mt-1 ml-6 rounded-lg">
      <a href="" className="p-4 flex text-lg items-center border rounded-lg">
       <FaBars className="mr-3 text-4xl" > </FaBars> Shortlist
       </a>
       <div className="bg-white">
       <LowerSideBar></LowerSideBar>
       </div>
      </div>

      
    </div>
  );
};

export default Sidebar;