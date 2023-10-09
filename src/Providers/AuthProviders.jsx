import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {

  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
   

  
  //google registration and login
  const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  
  }

  //email registration
  const createUser =(email,password)=>{
    setLoading(true)
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
      setLoading(false)
    
    //update profile

    // if(currentUser){
    //   updateProfile(auth.currentUser,{
    //     displayName: "jkhfk",
    //     photoURL: "https://i.ibb.co/g3TGcrr/Original.jpg"
    //   })
    //   .then({

    //   })
    //   .catch({

    //   });
    // }




    });
    return ()=>{
      unsubscribe()
    }
  },[])

  //logout
  const logOut=()=>{
    return signOut(auth)
  }

  // //update profile
  // if(user)
  // updateProfile(auth,user,{
  //   displayName:"Alfaz",
  //   photoURL: "https://i.ibb.co/g3TGcrr/Original.jpg"
  //  })
  //  .the((res)=>console.log(res.user))
  //  .catch((error)=>console.error(error.message))

  const authInfo={
    createUser,
    googleLogin,
    signIn,
    logOut,
    user,
    loading,
    
  }
  
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProviders;