import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export  const AuthContext  = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)

    const createUser = (email,password) =>{
        setLoader(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const singIn = (email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
        
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            console.log('logged in user inside auth state observer',loggedUser);
            setUser(loggedUser);
            setLoader(false)
        })
        return()=>{
            unsubscribe();
        }
    },[]);


    const LogOut = ()=>{
        setLoader(true);
         return signOut(auth);

    }
    const profileUpdate = (name,photo)=>{
        return updateProfile(user,{
            name,
            photo,
        })
    }


    const authInfo = 
    {
        user,
        createUser,
        singIn,
        profileUpdate,
        LogOut,
        loader,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;