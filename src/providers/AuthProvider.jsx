import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";

import { getAuth, updateProfile } from "firebase/auth";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const [user,setUser]=useState(null);

  
    
 

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (name,photo) => {
        setLoading(true);
     return  updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photo
    });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn=()=>{
        setLoading(true);
return  signInWithPopup(auth,provider)


    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
           
        });
        return () => {
            unSubscribe();
        }
    }, []);
    const authInfo = { 
        user,createUser,
        logOut,signIn,googleSignIn,loading,updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;