import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Aos from "aos";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";



const Register = () => {
  const {createUser} = useContext(AuthContext)
  const {googleLogin} = useContext(AuthContext)
  const [error,setError] = useState("")
  const [loggedIn,setLoggedIn] =useState(false)

  const handleRegister=(e)=>{
    e.preventDefault();
    const name= e.target.name.value;
    const photo= e.target.photo.value;
    const email= e.target.email.value;
    const password= e.target.password.value;
    console.log(name,email,password);
 
    if((!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) ){
      const errorMessage = "Password must be at least eight characters long with at least one Capital letter and one special character."
     setError(errorMessage);
     toast(errorMessage)
     e.target.reset()
    }
    else{
      setError('')
      createUser(email,password)
      .then(res=>{
        console.log(res.user)
        toast.success('Registration Successful') 
        setLoggedIn(true)
      })
      .catch(error=>{
        console.error(error.message)
        toast.error(error.message)
      })


    }
  }

  const handleSocialLogin =(media)=>{
    media()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }


  //update Profile
  


  return (
    <div>
      {
        loggedIn && <Navigate to="/"></Navigate>
      }
      <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register now</h1>
      
    </div>
    <div className="card w-[500px] flex-shrink-o shadow-2xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Your Name</span>
          </label>
          <input type="text" required name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Your Name" className="input input-bordered" required />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input type="email" name="email" required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input name="password" required type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn text-xl">Register</button>
        </div>
      </form>
     
      <p className="text-center mb-4">
        <span className="text-lg">Already have an account please</span>
        <Link to="/login"  className="font-bold text-blue-600 text-xl"> Login</Link>
      </p>
     <div className="flex items-center justify-center">
     <hr className="mr-2 ml-4 w-36 border-black" />
      <span>or</span>
      <hr className="ml-2 mr-4 w-36 border-black"/>
     </div>
     <div className="text-center mb-4 mt-4 ">
      <button onClick={()=>handleSocialLogin(googleLogin)} className=" text-white btn bg-red-500"><FaGooglePlusG  className="text-white  text-2xl"></FaGooglePlusG>Register with google</button>
     </div>
    </div>
  </div>
</div>
<ToastContainer/>
    </div>
  );
};

export default Register;