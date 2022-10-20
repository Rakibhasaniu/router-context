import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

import app from '../../firebase/firebase.init';


  export const AuthContext = createContext();

  const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser] = useState({});
    const [loading , setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const cretaeUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    
    useEffect( () => {
         const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(setUser);
        })
        return () => {
            unsubcribe();
        }
    }, [])

   
    const authInfo = {user, cretaeUser, signIn, logOut, signinWithGoogle, loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;