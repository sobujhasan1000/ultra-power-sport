import React, { createContext,useEffect,useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from './../firebase/firebase.config';
import axios from 'axios';

export const AuthContext=createContext(null);
const auth=getAuth(app)

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleprovider= new GoogleAuthProvider();

// user create
    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // user singin
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // singin by google
    const googleSingIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleprovider)
    }

    // update  Profile user

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // user logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // keep state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('authprovider currenuser',currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data=>{
                    console.log('jwt post',data.data)
                    localStorage.setItem('access-token',data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInformation={
      user,loading,createUser,singIn,logOut,googleSingIn,updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;