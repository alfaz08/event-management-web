import Slider from "../../components/Slider/Slider";
import Services from "../../components/Services/Services";
import Sidebar from "../../components/Sidebar/Sidebar";

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
    </div>
  );
};

export default Home;