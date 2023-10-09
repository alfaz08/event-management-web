import { FaLocationDot,FaMobileScreenButton,FaM } from "react-icons/fa6";


const Offer = () => {
  return (
    <div className="flex justify-center items-center mt-4 b">
      <div className="card w-[700px] ">
  <figure><img src="https://i.ibb.co/c6yY19P/contactus.webp" alt="car!"/></figure>
  <div className="card-body text-center items-center">
    <h2 className="card-title "> <FaM></FaM> corporatesolution@gmail.com</h2>
    <h2 className="card-title"><FaMobileScreenButton></FaMobileScreenButton> +88012345678</h2>
    <h2 className="card-title"><FaLocationDot></FaLocationDot> Dhaka,Bangladesh</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-warning">Call Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Offer;