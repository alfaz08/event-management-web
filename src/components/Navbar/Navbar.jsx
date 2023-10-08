import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const {user,logOut} =useContext(AuthContext)
   
  
  const handleLogOut=()=>{
    logOut()
    .then(()=>
    {
      toast('user logged out successfully')
    }
    )
    .catch(error=>toast(error))
  }
   
  const navLinks = <>
    <li><NavLink   to="/">Home</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
    <li><NavLink to="/offer">Offer</NavLink></li>
    {
      user && <>
      <li><NavLink to="/profile">Profile</NavLink></li>
    <li><NavLink to="/cart">Cart</NavLink></li>
    </>
    }
     
  </>
  return (
    <div className="sticky-navbar">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img className="hidden md:block w-24" src="/src/assets/COrporate.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?
      <>
      {
        user.displayName?
        <span className="mr-2 bg-amber-400 h-12 flex items-center rounded-xl">{user.displayName}</span>
        :
        <span className="mr-2 bg-amber-400 h-12 flex items-center rounded-xl">{user.email}</span>
      }
      {
        user.photoURL?
        <img className=" rounded-full mr-2 w-12" src={user.photoURL} />
        :
        <img className=" w-12" src="/src/assets/person.png" /> 
     }
    <a className="btn btn-warning" onClick={handleLogOut}>Sign Out</a>
      </>
      :
      <Link to="/login"><button className="btn btn-warning">Login</button></Link>
    }
  </div>
</div>
<ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;