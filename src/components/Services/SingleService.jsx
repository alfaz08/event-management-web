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
    <p>Price: $ {price}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-warning"><Link to={`/card/${id}`}>See Details</Link></button>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleService;