import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

const Register = () => {
  return (
    <div>
      <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register now</h1>
      <p className="py-6 text-center text-xl">Please give your information correctly</p>
    </div>
    <div className="card w-[500px] flex-shrink-o shadow-2xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn text-xl">Register</button>
        </div>
      </form>
     
      <p className="text-center mt-4 mb-4">
        <span className="text-lg">Already have an account please</span>
        <Link to="/login"  className="font-bold text-blue-600 text-xl"> Login</Link>
      </p>
     <div className="flex items-center justify-center">
     <hr className="mr-2 ml-4 w-36 border-black" />
      <span>or</span>
      <hr className="ml-2 mr-4 w-36 border-black"/>
     </div>
     <div className="text-center mb-4 mt-4 ">
      <button className=" text-white btn bg-red-500"><FaGooglePlusG  className="text-white  text-2xl"></FaGooglePlusG>Register with google</button>
     </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Register;