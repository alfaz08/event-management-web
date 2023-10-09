import { Link } from "react-router-dom";

const SingleCardDetails = ({singleCard}) => {
  const {event_name,id,image,price,details} =singleCard;
  return (
    <div className="grid grid-cols-2 mt-4 gap-6">

      <div className="md:border md:border-amber-400">
        <img className="h-[250px] md:h-[500px] w-full" src={image} alt="" />
      </div>

      <div>
        <h1 className="font-bold ">Event Name: {event_name}</h1>
        <div className="rating mt-2">
  <input type="radio" name="rating-1" className="mask mask-star bg-amber-400" />
  <input type="radio" name="rating-1" className="mask mask-star  bg-amber-400"  />
  <input type="radio" name="rating-1" className="mask mask-star  bg-amber-400" checked/>
  <input type="radio" name="rating-1" className="mask mask-star  bg-amber-400" />
  <input type="radio" name="rating-1" className="mask mask-star  bg-amber-400" />
</div>
         <h2 className="text-lg mt-2 text-left">{details}</h2>

         <h2 className="font-bold mt-2">$ {price}</h2>
         <div className="bg-amber-400 flex justify-between items-center sm:w-[200px] md:w-[400px] h-[100px] rounded-lg mt-4">
          <div>
            <h2 className="ml-2 font-bold">ENJOY EXCLUSIVE <br />OFFERS & DISCOUNT</h2>
          </div>
          <div>
            <h2 className="mr-2 font-bold">Book Now</h2>
          </div>
         </div>
         <div>
          
         </div>
         
         

         <div>
          <div>

          </div>
          
          {/* <h2>Add Promo code or voucher</h2>
          <input type="text" placeholder="Type here" className="input input-bordered border-amber-400 input-accent w-full max-w-xs" /> */}
        <div className="flex items-center mt-4 sm: w-[50px] md:w-[400px]">
  <input
    type="text"
    className=" px-4 py-2 border border-amber-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
    placeholder="Enter Your Coupon Code"
  />
  <button
    className="px-4 py-2 bg-amber-400 font-bold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
  >
    Apply
  </button>
</div>
   
<div>
         <Link to="/cart"> 
         <button className="btn btn-warning mt-4"> Add to Cart</button>
         </Link>
         </div>
         </div>
         
         
         
        
      </div>

    </div>
  );
};

export default SingleCardDetails;