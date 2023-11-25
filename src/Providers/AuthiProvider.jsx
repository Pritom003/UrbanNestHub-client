import { createContext, useEffect, useState } from "react";
// import app from "./firebase.config";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import axios from "axios";
import { app } from "../Firebase/firebase.config";

const provider=new GoogleAuthProvider()
const auth = getAuth(app);
export const AuthContext=createContext(null)
const AuthiProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const loginuser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
  const creategooglesignup=()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }



  const logout=()=>
  {
    setLoading(true)
    return signOut(auth);
}
  useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth,
     
     
     currentUser=>{
   
       console.log('user auth',currentUser)
       setUser(currentUser)
       setLoading(false)
   
     })
   return ()=>{
     unSubscribe()
   }
   },[])


  const userinfo={
    createUser,
    loginuser,
    creategooglesignup,
    logout,
    loading
,user  
  }


  return (
 <AuthContext.Provider value={userinfo}>
{children}
 </AuthContext.Provider>
  );
};

export default AuthiProvider;