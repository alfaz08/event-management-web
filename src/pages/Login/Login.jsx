import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import { FaGooglePlusG } from "react-icons/fa";


const Login = () => {
  
  const {signIn}=useContext(AuthContext)
  const {googleLogin} = useContext(AuthContext)
  const [loggedIn,setLoggedIn] =useState(false)

  const handleLogin=(e)=>{
    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;
    

    signIn(email,password)
    .then(res=>{
      console.log(res.user)
    toast.success('Login Successful')
    setLoggedIn(true)
    })
    .catch(error=>{
      toast.error(error.message)
    })
    const passwordInput = document.querySelector('input[name="password"]');
    if (passwordInput) {
      passwordInput.value = '';
    }
    
    
  }

  const handleSocialLogin =(media)=>{
    media()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  

  return (
    <div>
      {
        loggedIn && <Navigate to="/"></Navigate>
      }
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

     
      <div className="flex items-center justify-center">
     <hr className="mr-2 ml-4 w-36 border-black" />
      <span>or</span>
      <hr className="ml-2 mr-4 w-36 border-black"/>
     </div>
     <div className="text-center mb-4 mt-4 ">
      <button onClick={()=>handleSocialLogin(googleLogin)} className=" text-white btn bg-red-500"><FaGooglePlusG  className="text-white  text-2xl"></FaGooglePlusG>Login with google</button>
     </div>



    </div>
  </div>
</div>
 <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;