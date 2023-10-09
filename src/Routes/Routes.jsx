import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "../Providers/PrivateRoute";
import Offer from "../pages/Offer/Offer";
import CardDetails from "../pages/CardDetails/CardDetails";

const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorPage></ErrorPage>,
   children:[
    {
      path: "/",
       element: <Home></Home>,
       loader:()=>fetch('/event.json')
    },
    {
      path: "/login",
       element: <Login></Login>,
    },
    {
      path:"/register",
      element: <Register></Register>
    },
    {
      path:"/profile",
      element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
    },
    {
      path:"/card/:id",
      element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
      loader:()=>fetch('event.json')
    },
    {
      path:"/cart",
      element: <PrivateRoute><Cart></Cart></PrivateRoute>
    },
    {
      path:"/contact",
      element: <Offer></Offer>
    },
    {
      
    }
   
  
   ]
  },
   ]);

export default router;
