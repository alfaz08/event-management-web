import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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

  //email login
  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  

  //onaythstatechanged
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    });
    return ()=>{
      unsubscribe()
    }
  },[])

  //logout
  const logOut=()=>{
    return signOut(auth)
  }

  const authInfo={
    createUser,
    googleLogin,
    signIn,
    logOut,
    user
  }
  
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProviders;