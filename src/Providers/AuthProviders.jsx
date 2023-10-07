import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
  const [user,setUser] = useState(null)
   

  
  //google registration and login
  const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider)
  }

  //email registration
  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  




  const authInfo={
    createUser,
    googleLogin,
  }
  
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProviders;