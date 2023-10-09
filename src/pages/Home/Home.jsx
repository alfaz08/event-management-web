import Slider from "../../components/Slider/Slider";
import Services from "../../components/Services/Services";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/Footer/Footer";
import Member from "../../components/Members/Member";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-4">
        <div className=" col-span-3">
        <Services></Services>
        </div>
        <div className=" col-span-1">
        <Sidebar></Sidebar>
        </div>
      </div>
      
      <Clients></Clients>
      <Member></Member>
      <Footer></Footer>
     
    </div>
  );
};

export default Home;