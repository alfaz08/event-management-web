import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 
const Login = () => {
  
  const {signIn}=useContext(AuthContext)
  
  const handleLogin=(e)=>{
    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(res=>console.log(res.user))
    .catch(error=>{
      console.error(error.message)
      toast.error(error.message)
    })
  }
  

  return (
    <div>
      <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now</h1>
      <p className="py-6 text-center text-xl">Please enter your email and password for enjoy many features of Corporate Event Solution</p>
    </div>
    <div className="card w-full flex-shrink-0 max-w-md shadow-2xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl ">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-xl">Login</button>
        </div>
      </form>
     
      <p className="text-center mt-4 mb-4 ">
        <span className="text-lg ">Don't have an account please</span>
        <Link to="/register"  className=" font-bold text-blue-600 text-xl"> Register</Link>
      </p>
    </div>
  </div>
</div>
 <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;