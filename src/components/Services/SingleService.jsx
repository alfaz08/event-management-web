import Aos from "aos";
import { Link } from "react-router-dom";
const SingleService = ({service}) => {
  const {event_name,id,image,price,short_description} =service;
  return (
    <div >
      
      <div className="card bg-base-100 shadow-xl mt-10 " data-aos="fade-up"
     data-aos-duration="2000">
  <figure><img className=" h-60" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center">{event_name}</h2>
    <h2 className="text-lg">{short_description}</h2>
    <p className="text-xl font-bold">Price: $ {price}</p>
    <div className="card-actions justify-center">
    <Link to={`/card/${id}`}>
    <button className="btn btn-warning hover:text-black hover:bg-white">
      See Details
      </button>
      </Link>
      
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleService;